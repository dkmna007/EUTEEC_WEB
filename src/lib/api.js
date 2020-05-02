import "isomorphic-unfetch";
const API_BASE_URL = "https://euteec-api.herokuapp.com";
const API_MEMBERS_GET_ALL = `${API_BASE_URL}/api/users/all`;
export const API_BLOG_CREATE = `${API_BASE_URL}/api/blogs/add`;
export const API_BLOGS_GET_ALL = `${API_BASE_URL}/api/blogs/all`;

const fetchWithErrorHandling = async url => {
  try {
    return await (await fetch(url)).json();
  } catch (err) {
    return { error: true };
  }
};

/* blogs */
export const getBlogAndMoreBlogs = async slug =>
  fetchWithErrorHandling(`${API_BASE_URL}/api/blogs/${slug}`);

export const getAllBlogsWithSlug = async () =>
  fetchWithErrorHandling(API_BLOGS_GET_ALL);

/* team */

export const getTeam = async () => fetchWithErrorHandling(API_MEMBERS_GET_ALL);
