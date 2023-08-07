import axios from "axios";

export const tenantRegistration = async (name: string, password: string) => {
  const apiUrl = process.env.REACT_APP_API_URL + `/tenants`;
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    const response = await axios.post(apiUrl, { name, password }, { headers });
    return response.data;
  } catch (error) {
    return null;
  }
};
