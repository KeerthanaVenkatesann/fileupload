// import axios from "axios";
// import { environment, headers } from "../Environment/Enviraonment";

// const API_URL = environment.serverURL;

// export const fetchData = async () => {
//   try {
//     const response = await axios.get(`${API_URL}data`, { headers });
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching data", error);
//     throw error;
//   }
// };

// export const uploadFile = async (file) => {
//   const formData = new FormData();
//   formData.append("file", file);

//   try {
//     await axios.post(`${API_URL}/api/uploadAndDownload/fileUpload`, formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//         Authorization: headers.Authorization,
//       },
//     });
//     return "File uploaded successfully";
//   } catch (error) {
//     console.error("Error uploading file", error);
//     throw error;
//   }
// };

// export const addData = async (data) => {
//   try {
//     await axios.post(`${API_URL}data`, { data }, { headers });
//   } catch (error) {
//     console.error("Error adding data", error);
//     throw error;
//   }
// };

// export const deleteData = async (id) => {
//   try {
//     await axios.delete(`${API_URL}data/${id}`, { headers });
//   } catch (error) {
//     console.error("Error deleting data", error);
//     throw error;
//   }
// };

// export const updateData = async (id, data) => {
//   try {
//     await axios.put(`${API_URL}data/${id}`, { data }, { headers });
//   } catch (error) {
//     console.error("Error updating data", error);
//     throw error;
//   }
// };

// export const downloadFile = async (fileName) => {
//   try {
//     const response = await axios.get(`${API_URL}filedowload/${fileName}`, {
//       headers,
//       responseType: "blob",
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error downloading file", error);
//     throw error;
//   }
// };
import axios from "axios";
import { environment, headers } from "../Environment/Enviraonment";

const API_URL = environment.serverURL;

// Function to fetch data
export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_URL}/data`, { headers });
    return response.data;
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
};

// Function to upload a file
export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post(`${API_URL}/api/uploadAndDownload/fileUpload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: headers.Authorization,
      },
    });
    return "File uploaded successfully";
  } catch (error) {
    if (error.response) {
      console.error(`Error uploading file: ${error.response.data.message}`, error.response.data);
    } else {
      console.error("Error uploading file", error);
    }
    throw error;
  }
};

// Function to add data
export const addData = async (data) => {
  try {
    await axios.post(`${API_URL}/data`, data, { headers });
  } catch (error) {
    if (error.response) {
      console.error(`Error adding data: ${error.response.data.message}`, error.response.data);
    } else {
      console.error("Error adding data", error);
    }
    throw error;
  }
};

// Function to delete data
export const deleteData = async (id) => {
  try {
    await axios.delete(`${API_URL}/data/${id}`, { headers });
  } catch (error) {
    if (error.response) {
      console.error(`Error deleting data: ${error.response.data.message}`, error.response.data);
    } else {
      console.error("Error deleting data", error);
    }
    throw error;
  }
};

// Function to update data
export const updateData = async (id, data) => {
  try {
    await axios.put(`${API_URL}/data/${id}`, data, { headers });
  } catch (error) {
    if (error.response) {
      console.error(`Error updating data: ${error.response.data.message}`, error.response.data);
    } else {
      console.error("Error updating data", error);
    }
    throw error;
  }
};

// Function to download a file
export const downloadFile = async (fileName) => {
  try {
    const response = await axios.get(`${API_URL}/filedownload/${fileName}`, {
      headers,
      responseType: "blob",
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(`Error downloading file: ${error.response.data.message}`, error.response.data);
    } else {
      console.error("Error downloading file", error);
    }
    throw error;
  }
};
