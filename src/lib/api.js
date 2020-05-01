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
export async function getBlogAndMoreBlogs(slug) {
  let r = await fetch(`${API_BASE_URL}/api/blogs/${slug}`);
  let blog = await r.json();

  return blog;
}

export async function getAllBlogsWithSlug() {
  let r = await fetch(API_BLOGS_GET_ALL);
  let blogs = await r.json();

  return blogs;
}

/* team */

export const getTeam = async () => fetchWithErrorHandling(API_MEMBERS_GET_ALL);
