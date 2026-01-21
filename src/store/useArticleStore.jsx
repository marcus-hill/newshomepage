import { create } from "zustand";
import articlesData from "../data/articles.json";

export const useArticleStore = create((set, get) => ({
  articles: articlesData,
}));
