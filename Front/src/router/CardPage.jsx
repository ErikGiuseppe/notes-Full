import Header from "../components/Header/Header";
import ArticleList from "../components/ArticleList/ArticleList";

const CardPage = () => {
  const textheader = "Erik Notes";
  return (
    <>
      <Header textheader={textheader} />;
      <ArticleList />
    </>
  );
};
export default CardPage;
