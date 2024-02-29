import { useEffect, useState } from "react";
import { IUser } from "../../../types/thread";
import { axiosInstance } from "../../../lib/axios";

export default function useSuggestion() {
  const [suggest, setSuggest] = useState<IUser[]>([]);

  const fetchSuggest = async () => {
    try {
      const response = await axiosInstance.get("/user/follow?type=sugestion");
      setSuggest(response.data.data);
    } catch (error) {
      console.log(`error`, error);
    }
  };

  const handleFollow = async (userId: number) => {
    try {
      const response = await axiosInstance.post(
        `/user/follow?following=${userId}`
      );
      console.log(response);
      fetchSuggest();
    } catch (error) {
      console.log(`error`, error);
    }
  };

  useEffect(() => {
    fetchSuggest();
  }, []);

  return {
    suggest,
    handleFollow,
    fetchSuggest,
  };
}
