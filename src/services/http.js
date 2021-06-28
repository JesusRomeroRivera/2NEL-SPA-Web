import axios from "axios";

export default axios.create({
  baseURL: "http://tunelapi-001-site1.ftempurl.com/api/",
  headers: { "Content-type": "application/json" },
});
