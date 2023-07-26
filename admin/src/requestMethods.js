import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL;
const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;
//  const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YzBkM2YzM2UyNWU3YTg4OWE2ZjJmMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MDM2MjU0NywiZXhwIjoxNjkwNjIxNzQ3fQ.6DbbENNRXLL9rbAOwJTc9LCgXIw5c3teD8Gsrekri-k"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
