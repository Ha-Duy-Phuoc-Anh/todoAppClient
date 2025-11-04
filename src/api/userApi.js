import axiosClient from "./axiosClient";

const signup = (data) => axiosClient.post("/auth/signup", data);
const signin = (data) => axiosClient.post("/auth/signin", data);

export { signup, signin };
