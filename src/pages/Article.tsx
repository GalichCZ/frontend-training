import ArticleContent from "../features/article/ArticleContent";
import CommentBlock from "../features/comments/CommentBlock";

const Article = () => {
  return (
    <section className="article-section">
      <div>
        <ArticleContent />
        <CommentBlock />
      </div>
    </section>
  );
};

export default Article;
