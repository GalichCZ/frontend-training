import axios from "axios";
import { IArticleBody } from "../../../../Types/ArticleBody";

export const postArticle = async (articleBody: IArticleBody) => {
  const apiUrl = process.env.REACT_APP_API_URL + "/articles";

  const headers = {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    "x-api-key": localStorage.getItem("apiKey"),
    "Content-Type": "application/json",
  };

  try {
    const response = await axios.post(apiUrl, articleBody, { headers });
    return response.data.articleId;
  } catch (error) {
    return null;
  }
};
