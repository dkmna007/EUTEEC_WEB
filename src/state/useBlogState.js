import React from "react";
import {
  API_BLOG_CREATE,
  API_BLOG_UPDATE,
  API_BLOGS_GET_ALL,
  API_BLOG_GET_ONE,
  API_GET_USER_BLOGS,
  API_BLOG_DELETE
} from "@/api";
import { useAxios } from "./useFetch/useAxios";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const useBlogState = ({ action, blogId }) => {
  const { user } = useSelector(state => state.user);
  let router = useRouter();

  const [userInput, setUserInput] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      title: "",
      mediaUrl: "",
      content: "",
      authorId: user ? user.uid : null,
      authorName: user ? user.displayName : null,
      authorAvator: user ? user.photoURL : null,
      category: "Technology",

      file: [],
      activeTab: "All",
      success: null,
      isOpen: false,
      error: null,
      openLoginDialog: false
    }
  );

  const progress = false;

  /* check if action is create or update  */
  const query = (action => {
    switch (action) {
      case "create":
        return { url: API_BLOG_CREATE, method: "post" };
      case "update":
        return { url: API_BLOG_UPDATE(blogId), method: "put" };
      case "delete":
        return { url: API_BLOG_DELETE(blogId), method: "delete" };
      case "getAll":
        return { url: API_BLOGS_GET_ALL, method: "get" };
      case "getOne":
        return { url: API_BLOG_GET_ONE(blogId), method: "get" };
      default:
        return { url: "", method: "" };
    }
  })(action);

  /* get all blogs */

  const {
    getResponse: getAllBlogs,
    error: blogsFetchError,
    isLoading: isLoadingBlogs,
    response: blogs
  } = useAxios("get", API_BLOGS_GET_ALL);

  /* get one blog */
  const {
    getResponse: getBlog,
    error: blogFetchError,
    isLoading: isLoadingBlog,
    response: blog
  } = useAxios("get", API_BLOG_GET_ONE(blogId ? blogId : action));

  console.log(blogFetchError);
  /* get all blogs for a specific user */

  const {
    getResponse: getUserBlogs,
    error: userBlogsFetchError,
    isLoading: isLoadingUserBlogs,
    response: userBlogs
  } = useAxios("get", API_GET_USER_BLOGS(user && user.uid));

  /* perform blog post/put */
  const {
    getResponse: postBlog,
    error: blogPostError,
    isLoading: isBlogPostPutLoading,
    uploadingPercentage,
    response
  } = useAxios(query.method, query.url);

  /* perfom blog delete */
  const {
    response: blogDeleteResponse,
    getResponse: deleteBlog,
    error: blogDeleteError,
    isLoading: isDeleteBlogLoading
  } = useAxios(query.method, query.url);

  /* event listeners */

  /* get user blogs effect */
  React.useEffect(() => {
    if (action === "user" || action === "delete") {
      getUserBlogs();
    }
  }, []);
  /* update  current blog object */
  React.useEffect(() => {
    if (blog) {
      setUserInput({ ...blog });
    }
  }, [blog]);

  React.useEffect(() => {
    if (action === "getAll") {
      getAllBlogs();
    }
  }, []);
  React.useEffect(() => {
    if ((blogId && action === "getOne") || action === "update") {
      getBlog();
    }
  }, [blogId, action]);

  /* post/put blog effect */
  React.useEffect(() => {
    if (response) {
      setUserInput({
        success: `Blog has been ${
          action === "update" ? "updated" : "created"
        } successfully `
      });
    }
    if (blogPostError) {
      setUserInput({
        error: "Opps!! something went wrong"
      });
    }
  }, [response, blogPostError]);

  /* delete blog effect */
  React.useEffect(() => {
    userInput.isOpen
      ? null
      : setUserInput({
          success: null
        });
  }, [userInput.isOpen]);

  React.useEffect(() => {
    if (blogDeleteError) {
      setUserInput({
        success: blogDeleteError
      });
    }
  }, [blogDeleteError]);

  React.useEffect(() => {
    if (blogDeleteResponse) {
      setUserInput({
        success: blogDeleteResponse.message
      });

      getUserBlogs();
    }
  }, [blogDeleteResponse]);

  /* login dialog effect */
  React.useEffect(() => {
    user &&
      setUserInput({
        openLoginDialog: false
      });
  }, [user]);

  /* actions functions */
  const handleFormChange = e => {
    const { name, value } = e.target;
    setUserInput({ [name]: value });
  };

  const handleFileChange = files => {
    setUserInput({ file: files[0] });
  };
  const handleEditorChange = editorState => {
    setUserInput({ content: editorState });
  };

  const CheckRequiedFields = () => {
    if (userInput.title) {
      return true;
    }
    return false;
  };

  const handleThumbnailClick = blog => () => {
    router.push(`/blogs/${blog._id}`);
  };

  const handleTabClick = name => () => {
    setUserInput({ activeTab: name });
  };
  const handleRetry = () => {
    setUserInput({
      error: null
    });
    setUserInput({
      success: null
    });
  };

  const handleGoBack = () => {
    setUserInput({
      error: null
    });
    setUserInput({
      success: null
    });
  };
  /* handle claps */

  const onCountChange = ({ count, countTotal }) => {
    console.log(count, countTotal);
  };

  const handleBlogSave = () => {
    var blogFormData = new FormData();
    for (var key in userInput) {
      blogFormData.append(key, userInput[key]);
    }
    // console.log(userInput);
    CheckRequiedFields() ? postBlog(blogFormData) : null;
  };

  const handleDelete = () => {
    deleteBlog();
  };

  const viewCreatedBlog = () => {
    router.push(`/blogs/${response._id}`);
  };

  const handleOpenDeleteDialog = () => {
    setUserInput({
      isOpen: true
    });
  };
  const handleCloseDeleteDialog = () => {
    setUserInput({
      isOpen: false
    });
  };
  return {
    handleFileChange,
    handleFormChange,
    handleRetry,
    handleGoBack,
    viewCreatedBlog,
    handleEditorChange,
    handleBlogSave,
    handleThumbnailClick,
    handleCloseDeleteDialog,
    handleOpenDeleteDialog,

    handleTabClick,
    getAllBlogs,
    onCountChange,
    handleDelete,
    progress,
    userInput,
    blogsFetchError,
    blogFetchError,
    isBlogPostPutLoading,
    isLoadingUserBlogs,
    userBlogsFetchError,
    isLoadingBlogs,
    isDeleteBlogLoading,
    userBlogs,
    isLoadingBlog,
    uploadingPercentage,
    blogs,
    blog,
    user
  };
};

export default useBlogState;