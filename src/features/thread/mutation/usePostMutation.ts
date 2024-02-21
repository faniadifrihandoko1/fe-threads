// hooks/mutations/usePostMutation.ts
import { useMutation } from "react-query";
import { useFetchThread } from "../../threads/useFetchThread";
import { axiosInstance } from "../../../lib/axios";

const usePostMutation = () => {
  const token = localStorage.getItem("token");
  return useMutation(
    async (body: { content: string; image: string }) => {
      try {
        const response = await axiosInstance.post("/thread", body, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response);
        return response;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.log(error.response.data.message);
        throw new Error(error.response.data.message);
      }
    },
    {
      onSuccess: () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { refetch } = useFetchThread();
        refetch();
      },
    }
  );
};

export default usePostMutation;
