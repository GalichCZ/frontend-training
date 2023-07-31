import React from "react";
import Comments from "./Comments";
import CreateComment from "./CreateComment";

const CommentBlock = () => {
  return (
    <div className="comment-block">
      <h4>Comments (4)</h4>
      <CreateComment />
      <Comments />
    </div>
  );
};

export default CommentBlock;
