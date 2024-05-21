import axios from "axios";

export default class AxiosApi {
  constructor() {
    this.axios = axios.create({
      baseURL: "http://localhost:3000",
    });
  }
  async tela() {
    const { data } = await this.axios.get("/note", {
      headers: {},
    });

    return data;
  }
  async postagem(Post) {
    const { data } = await this.axios.post("/note", Post, {
      headers: { headers: { "Content-Type": "application/json" } },
    });

    return data;
  }
}
