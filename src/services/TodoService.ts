import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/JasonHitching/todo-list",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getItems() {
    return apiClient.get("/todoItems");
  }
};
