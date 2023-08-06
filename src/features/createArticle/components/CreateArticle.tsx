import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postArticle } from "../utils/api/postArticle";
import usePostImage from "../../../hooks/usePostImage";
import ArticleForm from "./ArticleForm";

const CreateArticle = () => {
  const navigate = useNavigate();
  const [perex, setPerex] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const { imageId, imageUrl } = usePostImage(file);

  const isButtonDisabled = !title || !perex || !imageId;

  const handlePerexChange = useCallback((value: string) => {
    setPerex(value);
  }, []);

  const handleTitleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setFile(file);
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const articleId = await postArticle({ title, perex, imageId });
    if (articleId) {
      navigate(`../article/${articleId}`);
    }
  };

  return (
    <>
      <ArticleForm
        handleSubmit={handleSubmit}
        isButtonDisabled={isButtonDisabled}
        handleTitleChange={handleTitleChange}
        handleFileChange={handleFileChange}
        handlePerexChange={handlePerexChange}
        imageUrl={imageUrl}
        perex={perex}
      />
    </>
  );
};

export default CreateArticle;
