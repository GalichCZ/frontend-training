import { IComment } from "../../Types/Comment";
import Comment from "./Comment";

const Comments = ({ comments }: { comments: IComment[] }) => {
  return (
    <>
      {comments.map((comment) => (
        <Comment comment={comment} />
      ))}
    </>
  );
};

export default Comments;
