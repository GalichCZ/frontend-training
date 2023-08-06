import { useEffect, useState } from "react";
import { useGetArticlesQuery } from "../store/api/articleApi";
import { IArticle } from "../Types/Article";

const useGetArticle = (offset: number) => {
  const { data, isLoading } = useGetArticlesQuery(offset);
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [max, setMax] = useState(0);

  useEffect(() => {
    if (data) {
      setMax(data.pagination.total);

      //must find better solution, now it is O(n^2)
      setArticles((prevArticles) =>
        Array.from(new Set([...prevArticles, ...data.items]))
      );
    }
  }, [data]);

  return { articles, isLoading, max };
};

export default useGetArticle;
