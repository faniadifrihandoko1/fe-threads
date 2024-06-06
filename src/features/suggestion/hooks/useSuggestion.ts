import { useEffect, useState } from "react";
import { IUser } from "../../../types/thread";
import { axiosInstance } from "../../../lib/axios";
import { useUpdateUser } from "../../user/hooks/useUpdateUser";

export default function useSuggestion() {
  const [suggest, setSuggest] = useState<IUser[]>([]);
  const [isloading, setIsloading] = useState(false);
  const { check } = useUpdateUser();

  const fetchSuggest = async () => {
    try {
      const response = await axiosInstance.get(
        "/user/follow?type=sugestion&limit=5"
      );
      setSuggest(response.data.data);
      setIsloading(true);
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
      check();
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
    isloading,
  };
}
