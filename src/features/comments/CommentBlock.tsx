import { useEffect, useState } from "react";
import { IComment } from "../../Types/Comment";
import Comments from "./Comments";
import CreateComment from "./CreateComment";

const CommentBlock = ({
  comments,
  articleId,
}: {
  comments: IComment[];
  articleId: string;
}) => {
  /*
    NOTE: This part of code would not be used in real app, 
    it is just mocking data, because the comment api does not work 
  */
  const [commentsArr, setCommentsArr] = useState<IComment[]>([]);
  useEffect(() => {
    setCommentsArr(comments);
  }, [comments]);

  return (
    <div className="comment-block">
      <h4>Comments ({commentsArr.length})</h4>
      <CreateComment
        articleId={articleId}
        setCommentsArr={setCommentsArr}
        commentsArr={commentsArr}
      />
      {/*there should be passed comments*/}
      <Comments comments={commentsArr} />
    </div>
  );
};

export default CommentBlock;
