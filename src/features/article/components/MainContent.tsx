import { FC } from "react";
import CreatorSpan from "../../../UI/CreatorSpan";
import { dateFormat } from "../../../utils/dateFormat";

interface Props {
  title: string;
  perex: string;
  imgId: string;
  createdAt: Date;
}

const MainContent: FC<Props> = ({ title, perex, imgId, createdAt }) => {
  const splittedText = perex.split("\n");

  return (
    <div className="article-content--main">
      <h1>{title}</h1>
      <CreatorSpan creator="John Reed" date={createdAt} />
      <img src="" alt="" />
      {splittedText.map((text, key) => (
        <p key={key}>{text}</p>
      ))}
    </div>
  );
};

export default MainContent;
