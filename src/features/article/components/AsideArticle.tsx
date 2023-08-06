import { FC } from "react";
import { stringCut } from "../../../utils/stringCut";

interface Props {
  title: string;
  description: string;
  articleId: string;
}

const AsideArticle: FC<Props> = ({ title, description, articleId }) => {
  return (
    <div className="article-content--aside-block">
      <h6>{title}</h6>
      <p>{stringCut(description, 20)}</p>
    </div>
  );
};

export default AsideArticle;
