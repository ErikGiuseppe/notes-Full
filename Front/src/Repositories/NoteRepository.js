import axios from "axios";

export default class NoteRepository {
  constructor() {
    this.axios = axios.create({
      baseURL: "http://localhost:3000",
    });
  }
  async getAll(url) {
    const { data } = await this.axios.get("/note", {
      headers: {},
    });

    return data;
  }
  async getTypes(url) {
    const { data } = await this.axios.get("/note/type", {
      headers: {},
    });

    return data;
  }
  async getALLType(type) {
    const url = "/note/type/" + type;
    const { data } = await this.axios.get(url, {
      headers: {},
    });

    console.log(data);

    return data;
  }
  async createNote(Post) {
    const { data } = await this.axios.post("/note", Post, {
      headers: { headers: { "Content-Type": "application/json" } },
    });

    return data;
  }
}
