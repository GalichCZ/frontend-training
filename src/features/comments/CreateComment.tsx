import { TextField } from "@mui/material";
import img from "../../assets/img.png";

const CreateComment = () => {
  return (
    <div className="comment-create">
      <img src={img} alt="" />
      <TextField
        fullWidth
        multiline
        id="comment-input"
        label="Join the discussion"
        variant="outlined"
      />
    </div>
  );
};

export default CreateComment;
