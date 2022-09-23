import axios from "axios";
import env from "react-dotenv";

export const api = axios.create({
  baseURL: 'https://mall-fireman-ebh-api.herokuapp.com'
})

