import axios from "axios";

// @ts-ignore
axios.defaults.baseURL = import.meta.env.VITE_BASE_API_URL;

export default axios;
