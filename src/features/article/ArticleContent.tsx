import AsideArticles from "./AsideArticles";
import MainContent from "./MainContent";

const ArticleContent = () => {
  return (
    <div className="article-content">
      <MainContent />
      <AsideArticles />
    </div>
  );
};

export default ArticleContent;
