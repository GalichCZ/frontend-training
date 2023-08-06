import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetSpecificArticle from "../../../hooks/useGetSpecificArticle";
import Loader from "../../../UI/Loader";
import usePostImage from "../../../hooks/usePostImage";
import EditArticleForm from "./EditArticleForm";
import { editArticle } from "../utils/api/editArticle";

const EditArticle = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { article, loading } = useGetSpecificArticle(id);
  const [perex, setPerex] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const { imageId } = usePostImage(file);

  const isButtonDisabled = !title || !perex;

  const handlePerexChange = useCallback((value: string) => {
    setPerex(value);
  }, []);

  const handleTitleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement> | null) => {
    const file = event?.target.files?.[0] || null;
    setFile(file);
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const image = imageId ? imageId : article?.imageId;
    const articleId = await editArticle({ title, perex, imageId: image }, id);
    navigate(`../article/${articleId}`);
  };

  useEffect(() => {
    if (article) {
      setPerex(article.perex);
      setTitle(article.title);
    }
  }, [article]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <EditArticleForm
          handleSubmit={handleSubmit}
          isButtonDisabled={isButtonDisabled}
          handleTitleChange={handleTitleChange}
          title={article?.title}
          perex={article?.perex}
          handleFileChange={handleFileChange}
          handlePerexChange={handlePerexChange}
          imageId={imageId ? imageId : article?.imageId}
        />
      )}
    </>
  );
};

export default EditArticle;
