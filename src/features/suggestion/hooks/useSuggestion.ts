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
        "/follow?type=sugestion&limit=5"
      );
      setSuggest(response.data.data);
      setIsloading(true);
    } catch (error) {
      console.log(`error in fetch suggest`, error);
    }
  };

  const handleFollow = async (userId: number) => {
    try {
      await axiosInstance.post(`/follow?following=${userId}`);
      check();
      fetchSuggest();
    } catch (error) {
      console.log(`error in handle follow`, error);
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
