import { TextField } from "@mui/material";
import { ChangeEvent, FC, KeyboardEvent, useCallback, useState } from "react";
import img from "../../assets/img.png";
import { IComment } from "../../Types/Comment";

/*
  props interface to mock creating of comments, real case will have
  the function that calls the post request 
*/
interface Props {
  commentsArr: IComment[];
  setCommentsArr: (c: IComment[]) => void;
  articleId: string;
}

const CreateComment: FC<Props> = ({
  commentsArr,
  setCommentsArr,
  articleId,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [comment, setComment] = useState("");

  const handleCommentChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setComment(e.target.value);
    },
    []
  );

  const onEnterDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && e.ctrlKey && isFocused) {
      setCommentsArr([
        {
          commentId: new Date().toString(),
          articleId,
          author: "John Reed",
          content: comment,
          postedAt: new Date(),
          score: 0,
        },
        ...commentsArr,
      ]);
      setComment("");
    }
  };

  return (
    <div className="comment-create">
      <img src={img} alt="" />
      <TextField
        value={comment}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        onChange={handleCommentChange}
        onKeyDown={onEnterDown}
        fullWidth
        multiline
        id="comment-input"
        label="Join the discussion"
        variant="outlined"
      />
      <p>Post: CTRL + return</p>
    </div>
  );
};

export default CreateComment;
