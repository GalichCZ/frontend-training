import axios from "axios";

export const tenantLogin = async (username: string, password: string) => {
  const apiUrl = process.env.REACT_APP_API_URL + `/login`;
  const headers = {
    "Content-Type": "application/json",
    "x-api-key": localStorage.getItem("aoiKey"),
  };

  try {
    const response = await axios.post(
      apiUrl,
      { username, password },
      { headers }
    );
    return response.data;
  } catch (error) {
    return null;
  }
};
