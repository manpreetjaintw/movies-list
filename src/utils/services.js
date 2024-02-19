import { toast } from "react-toastify";
import { apiServiceRequest } from "./axiosInstance";

export const fetchMovieData = async (pageNo) => {
  const res = await apiServiceRequest({
    url: `data/page${pageNo}.json`,
  });
  if (res?.page) {
    return res?.page["content-items"].content
      ? res?.page["content-items"].content
      : null;
  } else {
    toast.error(res?.message);
  }
};
