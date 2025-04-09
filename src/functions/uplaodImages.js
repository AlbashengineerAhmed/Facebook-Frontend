import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const uplaodImages = async (formData, path, token) => {
  try {
    const { data } = await axios.post(
      `${BASE_URL}/uploadImages`,
      formData,
      {
        headers: {
          Auhorization: `Bearer ${token}`,
          "content-type": "multipart/form-data",
        },
      }
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
