import React, { FC } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { IArticle } from "../../../Types/Article";
import { stringCut } from "../../../utils/stringCut";
import { deleteArticle } from "../utils/api/deleteArticle";

type ArticleListItem = Omit<IArticle, "comments" | "imageId" | "createdAt">;

const ArticleRow: FC<ArticleListItem> = ({
  title,
  perex,
  author,
  numOfComs,
  articleId,
}) => {
  const navigate = useNavigate();
  const deleteArticleHandler = async (articleId: string) => {
    await deleteArticle(articleId);
    //not the best choice, should use react 'reactivity render' features
    window.location.reload();
  };

  const navigateToEdit = (articleId: string) => {
    navigate(`../edit/${articleId}`);
  };

  return (
    <div className="myarticles-list--row">
      <p>{title}</p>
      <p>{stringCut(perex, 20)}</p>
      <p>John Reed</p>
      <span>{numOfComs ?? 0}</span>
      <div>
        <FiEdit2
          onClick={() => {
            navigateToEdit(articleId);
          }}
          size={20}
        />
        <AiFillDelete
          onClick={() => {
            deleteArticleHandler(articleId);
          }}
          size={20}
        />
      </div>
    </div>
  );
};

export default ArticleRow;
