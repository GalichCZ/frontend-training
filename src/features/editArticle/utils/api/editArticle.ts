import axios from "axios";
import { IArticleBody } from "../../../../Types/ArticleBody";

export const editArticle = async (
  articleBody: IArticleBody,
  articleId?: string
) => {
  const apiUrl = process.env.REACT_APP_API_URL + `/articles/${articleId}`;

  const headers = {
    Authorization: "Bearer be9ccd82-b61e-4dca-be68-71bbd87cedae",
    "x-api-key": process.env.REACT_APP_X_API_KEY,
    "Content-Type": "application/json",
  };

  try {
    const response = await axios.patch(apiUrl, articleBody, { headers });
    return response.data.articleId;
  } catch (error) {
    return null;
  }
};
