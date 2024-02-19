import axios from "axios";

const baseURL = " https://test.create.diagnal.com/";
const apiService = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
  },
});
export const apiServiceRequest = (props) => {
  return request(props, apiService);
};
export const request = async (
  { method = "get", data = {}, params = null, url, headers },
  instance
) => {
  try {
    const queryString = params || "";
    const res = await instance({
      method,
      params: queryString,
      url: `${url}`,
      data,
      headers,
    });
    if (res.status === 400) {
      return false;
    }
    if (res.status === 401) {
      return false;
    }
    const response = res?.data;
    return response;
  } catch (err) {
    return err;
  }
};
