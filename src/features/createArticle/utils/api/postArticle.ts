import axios from "axios";
import { IArticleBody } from "../../../../Types/ArticleBody";

export const postArticle = async (articleBody: IArticleBody) => {
  const apiUrl = process.env.REACT_APP_API_URL + "/articles";

  const headers = {
    Authorization: "Bearer be9ccd82-b61e-4dca-be68-71bbd87cedae",
    "x-api-key": process.env.REACT_APP_X_API_KEY,
    "Content-Type": "application/json",
  };

  try {
    const response = await axios.post(apiUrl, articleBody, { headers });
    return response.data.articleId;
  } catch (error) {
    return null;
  }
};
