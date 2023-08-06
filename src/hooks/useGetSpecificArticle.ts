import { useCallback, useEffect, useState } from "react";
import { getSpecificArticle } from "../utils/api/getSpecificArticle";
import { IArticle } from "../Types/Article";

const useGetSpecificArticle = (id: string | undefined) => {
  const [article, setArticle] = useState<IArticle | null>(null);
  const [loading, setLoading] = useState(true);

  const getSpecificArticleHandle = useCallback(async () => {
    const data = await getSpecificArticle(id);
    setArticle(data);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    //avoiding rerender
    return () => {
      getSpecificArticleHandle();
    };
  }, [getSpecificArticleHandle]);

  return { article, loading };
};

export default useGetSpecificArticle;
