import axios from "axios";

export const getImage = async (imageId: string) => {
  const apiUrl = process.env.REACT_APP_API_URL + `/images/${imageId}`;
  const headers = {
    "x-api-key": process.env.REACT_APP_X_API_KEY,
    Accept: "image/*",
  };

  try {
    const response = await axios.get(apiUrl, {
      headers,
      responseType: "arraybuffer",
    });
    console.log(new Blob([response.data]));
    const imageBlob = new Blob([response.data], {
      type: response.headers["content-type"],
    });
    const imageUrl = URL.createObjectURL(imageBlob);
    return imageUrl;
  } catch (error) {
    console.log(error);
    return null;
  }
};
