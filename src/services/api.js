import axios from "axios";

export const api = axios.create({
  baseURL: 'https://mall-fireman-ebh-api.herokuapp.com'
})

