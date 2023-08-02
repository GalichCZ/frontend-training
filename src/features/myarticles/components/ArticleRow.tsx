import React, { FC } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { IArticle } from "../../../Types/Article";

const ArticleRow: FC<IArticle> = ({
  title,
  perex,
  author,
  numOfComs,
  articleId,
}) => {
  return (
    <div className="myarticles-list--row">
      <p>{title}</p>
      <p>{perex.substring(0, 25)}...</p>
      <p>{author}</p>
      <span>{numOfComs}</span>
      <div>
        <FiEdit2 size={20} />
        <AiFillDelete size={20} />
      </div>
    </div>
  );
};

export default ArticleRow;
