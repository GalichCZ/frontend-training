import { Button, TextField } from "@mui/material";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css"; // Import SimpleMDE styles
import { FC, useCallback, useState } from "react";

const articleId = "";

const ArticleForm: FC = () => {
  const [perex, setPerex] = useState("Initial value");

  const onPerexChange = useCallback(
    (value: string) => {
      setPerex(value);
    },
    [setPerex]
  );

  return (
    <form className="article-form">
      <div className="article-form--head">
        <h1>{articleId ? "Edit article" : "Create new article"}</h1>
        <Button type="submit" size="small" variant="contained">
          Publish article
        </Button>
      </div>

      <div className="article-form--block">
        <label htmlFor="title">Article Title</label>
        <TextField
          id="title-input"
          name="title"
          size="small"
          placeholder="Write your title"
          variant="outlined"
        />
      </div>

      <div className="article-form--block">
        <label>Featured image</label>
        <img src="" alt="" />
        <Button size="small" variant="contained">
          Upload an image
        </Button>
      </div>

      <label htmlFor="title">Content</label>
      <SimpleMDE value={perex} onChange={onPerexChange} />
    </form>
  );
};

export default ArticleForm;
