import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const CommentStats = ({ score }: { score: number }) => {
  return (
    <div className="comment-stats">
      <p>{score > 0 ? `+${score}` : score}</p>
      <IoIosArrowUp size={24} />
      <IoIosArrowDown size={24} />
    </div>
  );
};

export default CommentStats;
