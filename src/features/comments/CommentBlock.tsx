import React, { FC } from "react";
import { IComment } from "../../Types/Comment";
import Comments from "./Comments";
import CreateComment from "./CreateComment";

const CommentBlock = ({ comments }: { comments: IComment[] }) => {
  return (
    <div className="comment-block">
      <h4>Comments ({comments.length})</h4>
      <CreateComment />
      <Comments comments={comments} />
    </div>
  );
};

export default CommentBlock;
