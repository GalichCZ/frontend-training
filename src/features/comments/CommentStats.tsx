import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const CommentStats = ({ score }: { score: number }) => {
  return (
    <div className="comment-stats">
      <p>+3</p>
      <IoIosArrowUp size={24} />
      <IoIosArrowDown size={24} />
    </div>
  );
};

export default CommentStats;
