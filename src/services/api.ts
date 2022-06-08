import axios from "axios";

export const apiGitHub = axios.create({
  baseURL: "https://api.github.com/",
});
