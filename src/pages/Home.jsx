import { useArticleStore } from "../store/useArticleStore.jsx";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";
import { useMemo } from "react";

const Home = () => {
  const { getRandomArticle, getThreeNewestArticles, getThreeTopArticles } = useArticleStore();

  const article = getRandomArticle();

  const newestArticles = useMemo(() => {
    return (getThreeNewestArticles() ?? []).map((article) => {
      return (
        <div className={classes.newArticle} key={article.id}>
          <Link to={`/articles/${article.id}`} className={classes.noUnderline}>
            <p className={classes.newArticleTitle}>{article.title}</p>
          </Link>
          <p className={classes.newArticleDescription}>{article.description}</p>
          <hr className={classes.divider}></hr>
        </div>
      );
    });
  }, []);

  const topArticles = useMemo(() => {
    return (getThreeTopArticles() ?? []).map((article, index) => {
      return (
        <div className={classes.topArticle} key={article.id}>
          <img src={article.imageUrl} className={classes.topArticleImage} />
          <div className={classes.topArticleInfo} key={article.id}>
            <p className={classes.topArticleNumber}>0{index + 1}</p>
            <Link to={`/articles/${article.id}`} className={classes.noUnderline}>
              <p className={classes.topArticleTitle}>{article.title}</p>
            </Link>

            <p className={classes.topArticleDescription}>{article.description}</p>
          </div>
        </div>
      );
    });
  }, []);

  return (
    <>
      <div className={classes.homeContainer}>
        <div className={classes.featuredArticle}>
          <img src={article.imageUrl} className={classes.featuredArticleImage} />
          <div className={classes.articleSection}>
            <p className={classes.articleTitle}>{article.title}</p>

            <div className={classes.buttonSection}>
              <p className={classes.articleDescription}>{article.description}</p>
              <Link to={`/articles/${article.id}`}>
                <button className={classes.readMoreButton}>Read More</button>
              </Link>
            </div>
          </div>
        </div>

        <div className={classes.newArticles}>
          <p className={classes.newTitle}>New</p>
          <div className={classes.newArticlesContainer}>{newestArticles}</div>
        </div>

        <div className={classes.topArticles}>{topArticles}</div>
      </div>
    </>
  );
};

export default Home;
