import { FC } from "react";
import useGetArticle from "../../../hooks/useGetArticles";
import AsideArticles from "./AsideArticles";
import MainContent from "./MainContent";

interface Props {
  title: string;
  perex: string;
  imgId: string;
  createdAt: Date;
  articleId: string;
}

const ArticleContent: FC<Props> = ({
  title,
  perex,
  imgId,
  createdAt,
  articleId,
}) => {
  /*
    i'm calling this API only here because it is not relevant
    to fetch it until the main article is not loaded
  */
  const { articles, isLoading } = useGetArticle(0);

  return (
    <div className="article-content">
      <MainContent
        title={title}
        perex={perex}
        createdAt={createdAt}
        imgId={imgId}
      />
      <AsideArticles
        mainArticleId={articleId}
        articles={articles}
        isLoading={isLoading}
      />
    </div>
  );
};

export default ArticleContent;
