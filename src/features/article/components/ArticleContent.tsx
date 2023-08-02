import { FC } from "react";
import AsideArticles from "./AsideArticles";
import MainContent from "./MainContent";

interface Props {
  title: string;
  perex: string;
  imgId: string;
  createdAt: Date;
}

const ArticleContent: FC<Props> = ({ title, perex, imgId, createdAt }) => {
  return (
    <div className="article-content">
      <MainContent
        title={title}
        perex={perex}
        createdAt={createdAt}
        imgId={imgId}
      />
      <AsideArticles />
    </div>
  );
};

export default ArticleContent;
