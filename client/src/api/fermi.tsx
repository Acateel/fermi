import axios from "axios";
import { setupCache } from "axios-cache-interceptor";

const fermi = axios.create({
  baseURL: "http://localhost:3001/",
});

export default setupCache(fermi);
