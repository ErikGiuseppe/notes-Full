import Header from "../components/Header/Header";
import ArticleList from "../components/ArticleList/ArticleList";
import { useParams } from "react-router-dom";

const CardPage = () => {
  
  const { type } = useParams();
  return (
    <>
      <Header textheader={type} />;
      <ArticleList type={type} />
    </>
  );
};
export default CardPage;
