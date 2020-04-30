// const API_BASE_URL = "https://fathomless-beach-50954.herokuapp.com";
const API_BASE_URL = "https://euteec-api.herokuapp.com";

// export const API_COMMENT_DELETE = blogId => {
//   let base = `${API_BASE_URL}/api/comments/${blogId}`;

//   if (blogId) {
//     return base;
//   }
// };

export const API_COMMENTS_GET = blogId => {
  let base = `${API_BASE_URL}/api/comments/${blogId}`;

  if (blogId) {
    return base;
  }
};
export const API_COMMENT_POST = blogId => {
  let base = `${API_BASE_URL}/api/comments/${blogId}`;

  if (blogId) {
    return base;
  }
};
