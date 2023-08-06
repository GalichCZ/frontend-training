import { FC } from "react";
import { IArticle } from "../../../Types/Article";
import SkeletonAsideArticles from "../UI/SkeletonAsideArticles";
import AsideArticle from "./AsideArticle";

interface Props {
  isLoading: boolean;
  articles: IArticle[];
  mainArticleId: string;
}

const AsideArticles: FC<Props> = ({ isLoading, articles, mainArticleId }) => {
  if (isLoading) {
    return <SkeletonAsideArticles />;
  }

  const asideArticles = articles.filter(
    (article) => article.articleId !== mainArticleId
  );

  return (
    <aside className="article-content--aside">
      <h4>Related articles</h4>
      {asideArticles.map((article) => (
        <AsideArticle
          key={article.articleId}
          articleId={article.articleId}
          title={article.title}
          description={article.perex}
        />
      ))}
    </aside>
  );
};

export default AsideArticles;
