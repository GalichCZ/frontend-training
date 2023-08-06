import { useParams } from "react-router-dom";
import ArticleContent from "../features/article/components/ArticleContent";
import SkeletonArticle from "../features/article/UI/SkeletonArticle";
import CommentBlock from "../features/comments/CommentBlock";
import useGetSpecificArticle from "../hooks/useGetSpecificArticle";
import NotFound from "../UI/NotFound";

const Article = () => {
  const { id } = useParams();

  const { article, loading } = useGetSpecificArticle(id);

  if (loading) {
    return <SkeletonArticle />;
  }

  return (
    <section className="article-section">
      {!article ? (
        <NotFound />
      ) : (
        <div>
          <ArticleContent
            articleId={article.articleId}
            title={article.title}
            perex={article.perex}
            createdAt={article.createdAt}
            imgId={article.imageId}
          />
          <CommentBlock articleId={id ?? ""} comments={article.comments} />
        </div>
      )}
    </section>
  );
};

export default Article;
