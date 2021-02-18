import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const apiKey = "58e2c281247f8e440e2aa123c99f041f";

export default api;
