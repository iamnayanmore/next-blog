import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_API_KEY}`,
  },
});

// categories
export const fetchCategories = async () => api.get("/api/categories");

// Articles
export const fetchArticles = async (queryString: string) =>
  api.get(`/api/articles?${queryString}`);

// Fetch single article
export const fetchArticleBySlug = async (queryString: string) =>
  api.get(`/api/articles?${queryString}`);
