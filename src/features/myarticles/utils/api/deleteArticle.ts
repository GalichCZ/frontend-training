import axios from "axios";

export const deleteArticle = async (articleId: string) => {
  const apiUrl = process.env.REACT_APP_API_URL + `/articles/${articleId}`;
  const headers = {
    "x-api-key": localStorage.getItem("apiKey"),
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  };

  try {
    await axios.delete(apiUrl, { headers });
  } catch (error) {
    return null;
  }
};
