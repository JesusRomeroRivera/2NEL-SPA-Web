import Freelancer from "@/API/model/freelancer.js";
import { httpGet } from "@/API/https";
import { HOST } from "@/API/shared";

export default class freelancerService {
  constructor() {
    this.url = HOST + "/freelancers";
  }

  listar() {
    let response = httpGet(this.url);
    let json = response.responseText;
    let jsonParsed = JSON.parse(json);

    for (let e in jsonParsed) {
      let temTienda = new Freelancer();
      temTienda.loadFromParsedJson(jsonParsed[e]);
      jsonParsed[e] = temTienda;
    }

    return jsonParsed;
  }
}
