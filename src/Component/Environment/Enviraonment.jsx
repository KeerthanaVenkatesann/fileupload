export const environment = {
  production: false,
  serverURL: "http://localhost:8080",
};

const token = localStorage.getItem("token");

export const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `BslogiKey ${token}`,
};

export default environment;
