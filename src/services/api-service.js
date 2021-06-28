import http from "./http";

class GenericApiService {
  getAll() {
    return http.get("/freelancers");
  }
}

export default new GenericApiService();
