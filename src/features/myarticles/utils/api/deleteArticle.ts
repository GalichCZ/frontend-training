import axios from "axios";

export const deleteArticle = async (articleId: string) => {
  const apiUrl = process.env.REACT_APP_API_URL + `/articles/${articleId}`;
  const headers = {
    "x-api-key": process.env.REACT_APP_X_API_KEY,
    Authorization: "Bearer be9ccd82-b61e-4dca-be68-71bbd87cedae",
  };

  try {
    const response = await axios.delete(apiUrl, { headers });
  } catch (error) {
    return null;
  }
};
