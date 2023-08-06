import { Button, TextField } from "@mui/material";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { ChangeEvent, FC, FormEvent } from "react";
import UploadButton from "../../../UI/UploadButton";
import ImageHandler from "../../../UI/ImageHandler";

interface Props {
  handleSubmit: (e: FormEvent) => void;
  isButtonDisabled: boolean;
  handleTitleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePerexChange: (e: string) => void;
  imageUrl: string | null;
  perex: string;
}

const ArticleForm: FC<Props> = ({
  handleSubmit,
  isButtonDisabled,
  handleTitleChange,
  handlePerexChange,
  handleFileChange,
  imageUrl,
  perex,
}) => {
  return (
    <form onSubmit={handleSubmit} className="article-form">
      <div className="article-form--head">
        <h1>Create new article</h1>
        <Button
          disabled={isButtonDisabled}
          type="submit"
          size="small"
          variant="contained"
        >
          Publish article
        </Button>
      </div>

      <label htmlFor="title-input">Article Title</label>
      <TextField
        id="title-input"
        name="title"
        size="small"
        placeholder="Write your title"
        variant="outlined"
        onChange={handleTitleChange}
      />

      <label htmlFor="image-input">Featured image</label>
      {imageUrl ? (
        <ImageHandler imageUrl={imageUrl} handleFileChange={handleFileChange} />
      ) : (
        <UploadButton
          variant="contained"
          content="Upload image"
          handleFileChange={handleFileChange}
        />
      )}

      <label htmlFor="perex-input">Content</label>
      <SimpleMDE id="perex-input" value={perex} onChange={handlePerexChange} />
    </form>
  );
};

export default ArticleForm;
