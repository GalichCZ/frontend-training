import axios from "axios";
import { IArticleBody } from "../../../../Types/ArticleBody";

export const editArticle = async (
  articleBody: IArticleBody,
  articleId?: string
) => {
  const apiUrl = process.env.REACT_APP_API_URL + `/articles/${articleId}`;

  const headers = {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    "x-api-key": localStorage.getItem("apiKey"),
    "Content-Type": "application/json",
  };

  try {
    const response = await axios.patch(apiUrl, articleBody, { headers });
    return response.data.articleId;
  } catch (error) {
    return null;
  }
};
