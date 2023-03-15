import axios from "axios";

const fermi = axios.create({
  baseURL: "http://localhost:3001/",
});

export default fermi;
