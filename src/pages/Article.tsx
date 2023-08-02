import { useParams } from "react-router-dom";
import ArticleContent from "../features/article/components/ArticleContent";
import CommentBlock from "../features/comments/CommentBlock";
import useGetSpecificArticle from "../hooks/useGetSpecificArticle";
import NotFound from "../UI/NotFound";

const Article = () => {
  const { id } = useParams();

  const article = useGetSpecificArticle(id);

  return (
    <section className="article-section">
      {!article ? (
        <NotFound />
      ) : (
        <div>
          <ArticleContent
            title={article.title}
            perex={article.perex}
            createdAt={article.createdAt}
            imgId={article.imageId}
          />
          <CommentBlock comments={article.comments} />
        </div>
      )}
    </section>
  );
};

export default Article;
