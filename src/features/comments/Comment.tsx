import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import img from "../../assets/img.png";
import { IComment } from "../../Types/Comment";
import CommentStats from "./CommentStats";

dayjs.extend(relativeTime);

const Comment = ({ comment }: { comment: IComment }) => {
  return (
    <div className="comment-content">
      <img src={img} alt="" />
      <div>
        <strong>{comment.author}</strong>
        <span>{dayjs().from(comment.postedAt)}</span>
        <p>{comment.content}</p>
        <CommentStats score={comment.score} />
      </div>
    </div>
  );
};

export default Comment;
