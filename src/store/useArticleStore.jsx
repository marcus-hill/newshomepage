import { create } from "zustand";
import articlesData from "../data/articles.json";

export const useArticleStore = create((set, get) => ({
  articles: articlesData,

  getRandomArticle: () => {
    const articles = get().articles;
    const randomIndex = Math.floor(Math.random() * articles.length);
    return articles[randomIndex];
  },

  getThreeNewestArticles: () => {
    const articles = [...get().articles].sort((a, b) => {
      return new Date(b.publishedAt) - new Date(a.publishedAt);
    });

    return articles.slice(0, 3);
  },

  getThreeTopArticles: () => {
    const articles = [...get().articles].sort((a, b) => {
      return b.likeCount - a.likeCount;
    });

    return articles.slice(0, 3);
  },

  getArticleById: (id) => {
    return get().articles.find((article) => article.id === Number(id));
  },
}));
