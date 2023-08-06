import PreviewBlock from "./PreviewBlock";
import SkeletonArticle from "../UI/SkeletonArticles";
import useGetArticle from "../../../hooks/useGetArticles";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

//TODO: create fetch on scroll to bottom

const ArticlesContent = () => {
  const [offset, setOffset] = useState(0);
  const { articles, isLoading, max } = useGetArticle(offset);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && offset < max) {
      setOffset((val) => val + 5);
    }
  }, [inView]);

  if (isLoading) {
    return <SkeletonArticle />;
  }
  return (
    <>
      {articles.map((article, key) => (
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
