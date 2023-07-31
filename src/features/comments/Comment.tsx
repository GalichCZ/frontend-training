import img from "../../assets/img.png";
import CommentStats from "./CommentStats";

const Comment = () => {
  return (
    <div className="comment-content">
      <img src={img} alt="" />
      <div>
        <strong>John Reed</strong>
        <span>2 hours ago</span>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, ipsam
          ut asperiores autem dolor tempora possimus quas harum vitae. Ab!
        </p>
        <CommentStats />
      </div>
    </div>
  );
};

export default Comment;
