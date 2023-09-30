import axios from "axios";

export const TenisAPi = axios.create({
    baseURL: "http://localhost:5073/api/v1",
})