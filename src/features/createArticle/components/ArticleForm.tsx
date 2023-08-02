import { Button, TextField } from "@mui/material";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css"; // Import SimpleMDE styles
import {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { getImage } from "../../../utils/api/getImage";

const articleId = "";

const ArticleForm: FC = () => {
  const [perex, setPerex] = useState("");
  const [title, setTitle] = useState("");
  const [imageId, setImageId] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function test() {
    const a = await getImage("552849ca-0706-4dbc-a411-b429f734b138");
    console.log(a);
  }

  useEffect(() => {
    test();
  }, []);

  const handlePerexChange = useCallback((value: string) => {
    setPerex(value);
  }, []);

  const handleTitleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  const handleUploadButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setFile(file);
  };

  return (
    <form className="article-form">
      <div className="article-form--head">
        <h1>{articleId ? "Edit article" : "Create new article"}</h1>
        <Button type="submit" size="small" variant="contained">
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
      <img src={imageUrl} alt="article image" />
      <input
        className="article-form--file-input"
        type="file"
        id="image-input"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <Button
        onClick={handleUploadButtonClick}
        size="small"
        variant="contained"
      >
        Upload an image
      </Button>

      <label htmlFor="perex-input">Content</label>
      <SimpleMDE id="perex-input" value={perex} onChange={handlePerexChange} />
    </form>
  );
};

export default ArticleForm;
