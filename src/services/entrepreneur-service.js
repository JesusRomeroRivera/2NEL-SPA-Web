import http from "./http";

class EntrepreneurService {
  getAll() {
    return http.get("/entrepreneurs");
  }
  create(id, data) {
    return http.post(`/entrepreneurs?userId=${id}`, data);
  }
}

export default new EntrepreneurService();
