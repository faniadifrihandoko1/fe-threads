import { useQuery } from "react-query";
import { axiosInstance } from "../../lib/axios";

export const useFetchThread = () => {
  return useQuery({
    queryFn: async () => {
      const response = await axiosInstance.get("/thread");

      return response;
    },
  });
};
