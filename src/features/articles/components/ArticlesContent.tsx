import PreviewBlock from "./PreviewBlock";
import { useGetArticlesQuery } from "../../../store/api/articleApi";
import SkeletonArticle from "../UI/SkeletonArticle";
import { IArticle } from "../../../Types/Article";
import { useEffect, useState } from "react";

const ArticlesContent = () => {
  const { data, isLoading } = useGetArticlesQuery(0);
  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    if (data) {
      setArticles(data.items);
    }
  }, [data]);

  if (isLoading) {
    return <SkeletonArticle />;
  }

  return (
    <>
      {articles.map((article) => (
        <PreviewBlock
          key={article.articleId}
          imgUrl=""
          title={article.title}
          description={article.perex}
          createdAt={article.createdAt}
          numOfComs={article.numOfComs}
          articleId={article.articleId}
          creator="John Reed"
        />
      ))}
    </>
  );
};

export default ArticlesContent;
