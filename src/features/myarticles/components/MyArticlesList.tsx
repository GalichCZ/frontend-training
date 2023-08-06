import { Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import useGetArticle from "../../../hooks/useGetArticles";
import AdminHead from "../../../UI/AdminHead";
import { stringCut } from "../../../utils/stringCut";
import SkeletonRows from "../UI/SkeletonRows";
import ArticleRow from "./ArticleRow";
import ArticlesListHead from "./ArticlesListHead";

const MyArticlesList = () => {
  const [offset, setOffset] = useState(0);
  const { articles, isLoading } = useGetArticle(offset);

  return (
    <div className="myarticles-list">
      <div>
        <h1>My articles</h1>
        <Link to="../create">
          <Button size="small" variant="contained">
            Create new article
          </Button>
        </Link>
      </div>

      <ArticlesListHead />

      {isLoading ? (
        <SkeletonRows />
      ) : (
        <>
          {articles.map((item, key) => (
            <ArticleRow
              key={key}
              title={stringCut(item.title)}
              perex={item.perex}
              author={item.author}
              numOfComs={item.comments?.length}
              articleId={item.articleId}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default MyArticlesList;
