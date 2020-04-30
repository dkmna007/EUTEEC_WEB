// const API_BASE_URL = "https://fathomless-beach-50954.herokuapp.com";
const API_BASE_URL = "https://euteec-api.herokuapp.com";
export const API_BLOG_CREATE = `${API_BASE_URL}/api/blogs/add`;
export const API_BLOGS_GET_ALL = `${API_BASE_URL}/api/blogs/all`;

export const API_BLOG_DELETE = blogId => {
  let base = `${API_BASE_URL}/api/blogs/${blogId}`;

  if (blogId) {
    return base;
  }
};

export const API_BLOG_GET_ONE = blogId => {
  let base = `${API_BASE_URL}/api/blogs/${blogId}`;

  if (blogId) {
    return base;
  }
};
export const API_BLOG_UPDATE = blogId => {
  let base = `${API_BASE_URL}/api/blogs/${blogId}`;

  if (blogId) {
    return base;
  }
};

export const API_GET_USER_BLOGS = userId => {
  let base = `${API_BASE_URL}/api/blogs/${userId}/all`;

  if (userId) {
    return base;
  }
};
