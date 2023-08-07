import { Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import useGetArticle from "../../../hooks/useGetArticles";
import { stringCut } from "../../../utils/stringCut";
import SkeletonRows from "../UI/SkeletonRows";
import ArticleRow from "./ArticleRow";
import ArticlesListHead from "./ArticlesListHead";

const MyArticlesList = () => {
  //didn't spend time on pagination in this component, because
  //this component logically should get articles created by user only
  //I think for that, the BE data interface should be changed

  const [offset] = useState(0);
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
