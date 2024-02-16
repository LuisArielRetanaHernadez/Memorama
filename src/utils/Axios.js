/* eslint-disable no-undef */
import axios from "axios";
import { configDotenv } from "dotenv";
configDotenv();

export const instanceAxios = axios.create({
  baseURL: process.env.API_BASE,
})