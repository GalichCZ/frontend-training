import axios from "axios";

export const postImage = async (file: File) => {
  const apiUrl = process.env.REACT_APP_API_URL + "/images";

  const headers = {
    Authorization: "Bearer be9ccd82-b61e-4dca-be68-71bbd87cedae",
    "x-api-key": process.env.REACT_APP_X_API_KEY,
    "Content-Type": "multipart/form-data",
  };

  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await axios.post(apiUrl, formData, { headers });
    return response.data[0].imageId;
  } catch (error) {
    return null;
  }
};
