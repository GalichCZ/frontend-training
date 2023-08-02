import { useEffect, useState } from "react";
import { getSpecificArticle } from "../utils/api/getSpecificArticle";
import { IArticle } from "../Types/Article";

const useGetSpecificArticle = (id: string | undefined) => {
  const [article, setArticle] = useState<IArticle | null>(null);

  const getSpecificArticleHandle = async () => {
    const data = await getSpecificArticle(id);
    setArticle(data);
  };

  useEffect(() => {
    getSpecificArticleHandle();
  }, []);

  return article;
};

export default useGetSpecificArticle;
