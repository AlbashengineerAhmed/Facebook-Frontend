import axios from "axios";

export const uploadImages = async (formData, path, token) => {
  try {
    const { data } = await axios.post(
      `${process.env.BASE_URL}/uploadImages`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "multipart/form-data",
        },
      }
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
