import http from "./http";

class InvestorService {
  getAll() {
    return http.get("/investors");
  }
  create(id, data) {
    return http.post(`/investors?userId=${id}`, data);
  }
}

export default new InvestorService();
