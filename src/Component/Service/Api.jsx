import axios from "axios";
import { environment, headers } from "../Environment/Enviraonment";

const API_URL = environment.serverURL;

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const url = `${API_URL}/api/uploadAndDownload/upload`;
  console.log("Uploading to URL:", url); // Log the URL to verify it
  console.log("FormData:", formData.get("file")); // Log the file to verify it

  try {
    const response = await axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: headers.Authorization,
      },
    });
    console.log("Server response:", response.data); // Log the server response
    return "File uploaded successfully";
  } catch (error) {
    if (error.response) {
      console.error(
        `Error uploading file: ${error.response.data.message}`,
        error.response.data
      );
    } else {
      console.error("Error uploading file", error);
    }
    throw error;
  }
};
