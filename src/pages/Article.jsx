import { useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();

  return <div>Showing article with ID: {id}</div>;
};

export default Article;
