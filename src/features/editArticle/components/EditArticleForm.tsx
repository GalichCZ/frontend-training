import { Button, TextField } from "@mui/material";
import { ChangeEvent, FC, FormEvent } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import UploadButton from "../../../UI/UploadButton";
import useGetImage from "../../../hooks/useGetImage";
import ImageHandler from "../../../UI/ImageHandler";

interface Props {
  handleSubmit: (e: FormEvent) => void;
  isButtonDisabled: boolean;
  handleTitleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  title?: string;
  handleFileChange: (e: ChangeEvent<HTMLInputElement> | null) => void;
  handlePerexChange: (e: string) => void;
  imageId?: string;
  perex?: string;
}

const EditArticleForm: FC<Props> = ({
  handleSubmit,
  isButtonDisabled,
  handleTitleChange,
  title,
  handleFileChange,
  handlePerexChange,
  perex,
  imageId,
}) => {
  const { imageUrl } = useGetImage(imageId ?? "");

  return (
    <form onSubmit={handleSubmit} className="article-form">
      <div className="article-form--head">
        <h1>Edit article</h1>
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
        defaultValue={title}
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

export default EditArticleForm;
