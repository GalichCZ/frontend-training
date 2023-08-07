import PreviewBlock from "./PreviewBlock";
import SkeletonArticle from "../UI/SkeletonArticles";
import useGetArticle from "../../../hooks/useGetArticles";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { sortArticles } from "../../../utils/sortArticles";
//TODO: create fetch on scroll to bottom

const ArticlesContent = () => {
  const [offset, setOffset] = useState(0);
  const { articles, isLoading, max } = useGetArticle(offset);
  const { ref, inView } = useInView();
  const lessThanMax = offset < max;

  useEffect(() => {
    if (inView && lessThanMax) {
      setOffset((val) => val + 5);
    }
  }, [inView, lessThanMax]);

  const sortedArticles = sortArticles(articles, "createdAt");

  if (isLoading) {
    return <SkeletonArticle />;
  }
  return (
    <>
      {sortedArticles.map((article, key) => (
        <PreviewBlock
          key={key}
          imgId={article.imageId}
          title={article.title}
          description={article.perex}
          createdAt={article.createdAt}
          numOfComs={article.numOfComs}
          articleId={article.articleId}
          creator="John Reed"
        />
      ))}
      <div ref={ref} className="trigger-block" />
    </>
  );
};

export default ArticlesContent;
