import axios from "axios";

export default axios.create({
  baseURL: "https://tunel-csharp-backend.herokuapp.com/api",
  headers: { "Content-type": "application/json" },
});
