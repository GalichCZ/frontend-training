import { IArticle } from "../../../Types/Article";
import AdminHead from "../../../UI/AdminHead";
import { stringCut } from "../../../utils/stringCut";
import ArticleRow from "./ArticleRow";
import ArticlesListHead from "./ArticlesListHead";

const MyArticlesList = () => {
  return (
    <div className="myarticles-list">
      <AdminHead title="My articles" buttonName="Create new article" />
      <ArticlesListHead />
      {/* {items.map((item) => ( */}
      {/* <ArticleRow */}
      {/* key={item.articleId} */}
      {/* title={stringCut(item.title)} */}
      {/* perex={item.perex} */}
      {/* author={item.author} */}
      {/* numOfComs={item.numOfComs} */}
      {/* articleId={item.articleId} */}
      {/* /> */}
      {/* ))} */}
    </div>
  );
};

export default MyArticlesList;
