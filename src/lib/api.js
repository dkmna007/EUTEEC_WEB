import fetch from "node-fetch";
const API_BASE_URL = "https://euteec-api.herokuapp.com";

export async function getBlogAndMoreBlogs(slug) {
  let r = await fetch(`${API_BASE_URL}/api/blogs/${slug}`);
  let blog = await r.json();

  return blog;
}

export async function getAllBlogsWithSlug() {
  let r = await fetch(`${API_BASE_URL}/api/blogs/all`);
  let blogs = await r.json();

  return blogs;
}
