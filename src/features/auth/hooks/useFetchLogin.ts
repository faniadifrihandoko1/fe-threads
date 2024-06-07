import { useMutation } from "react-query";
import { axiosInstance } from "../../../lib/axios";
import { useNavigate } from "react-router-dom";

export interface useFetchLoginProps {
  onError?: (message: string) => void;
}
export const useFetchLogin = ({ onError }: useFetchLoginProps) => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (body: { email: string; password: string }) => {
      try {
        const response = await axiosInstance.post("/login", body);
        localStorage.setItem("token", response.data.token);
        navigate("/");
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
