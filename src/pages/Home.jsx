import { useArticleStore } from "../store/useArticleStore.jsx";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";
import { useMemo } from "react";

const Home = () => {
  const { getRandomArticle, getThreeNewestArticles } = useArticleStore();

  const article = getRandomArticle();

  const newestArticles = useMemo(() => {
    return (getThreeNewestArticles() ?? []).map((article) => {
      return (
        <div className={classes.newArticle}>
          <Link to={`/articles/${article.id}`} className={classes.noUnderline}>
            <p className={classes.newArticleTitle}>{article.title}</p>
          </Link>
          <p className={classes.newArticleDescription}>{article.description}</p>
          <hr className={classes.divider}></hr>
        </div>
      );
    });
  }, []);

  return (
    <>
      <div className={classes.homeContainer}>
        <div className={classes.featuredArticle}>
          <img src={article.imageUrl} className={classes.featuredArticleImage} />
          <p className={classes.articleTitle}>{article.title}</p>
          <p className={classes.articleDescription}>{article.description}</p>
          <Link to={`/articles/${article.id}`}>
            <button className={classes.readMoreButton}>Read More</button>
          </Link>
        </div>

        <div className={classes.newArticles}>
          <p className={classes.newTitle}>New</p>
          <div className={classes.newArticlesContainer}>{newestArticles}</div>
        </div>
      </div>
    </>
  );
};

export default Home;
