import axios from "axios";

export const getSpecificArticle = async (articleId: string | undefined) => {
  const apiUrl = process.env.REACT_APP_API_URL + `/articles/${articleId}`;
  const headers = {
    "x-api-key": process.env.REACT_APP_X_API_KEY,
  };

  try {
    const response = await axios.get(apiUrl, {
      headers,
    });

    return response.data;
  } catch (error) {
    return null;
  }
};
