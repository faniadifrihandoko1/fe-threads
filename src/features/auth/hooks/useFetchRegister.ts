import { useMutation } from "react-query";
import { useFetchLoginProps } from "./useFetchLogin";
import { axiosInstance } from "../../../lib/axios";
import { useNavigate } from "react-router-dom";

export const useFetchRegister = ({ onError }: useFetchLoginProps) => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (body: {
      fullName: string;
      username: string;
      email: string;
      password: string;
    }) => {
      try {
        const response = await axiosInstance.post("/register", body);
        navigate("/login");
        return response;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        const message = error.response.data;
        if (onError) {
          onError(message.message);
        }
      }
    },
  });
};
