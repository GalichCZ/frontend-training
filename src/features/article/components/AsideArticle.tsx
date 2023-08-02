import { FC } from "react";

interface Props {
  title: string;
  description: string;
}

const AsideArticle: FC<Props> = ({ title, description }) => {
  return (
    <div className="article-content--aside-block">
      <h6>{title}</h6>
      <p>{description}</p>
    </div>
  );
};

export default AsideArticle;
