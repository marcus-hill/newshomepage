import { useParams, Link } from "react-router-dom";
import classes from "./Article.module.css";
import { useArticleStore } from "../store/useArticleStore.jsx";

const Article = () => {
  const { id } = useParams();
  const { getArticleById } = useArticleStore();

  const article = getArticleById(id);

  return (
    <div className={classes.articleContainer}>
      <img src={article.imageUrl} className={classes.articleImage} alt="" />
      <p className={classes.articleTitle}>{article.title}</p>
      <p className={classes.articleDate}>
        {article.author} on{" "}
        {new Date(article.publishedAt).toLocaleString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })}
      </p>
      <p className={classes.articleBody}>{article.content}</p>
    </div>
  );
};

export default Article;
