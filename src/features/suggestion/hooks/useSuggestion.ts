import { useEffect, useState } from "react";
import { IUser } from "../../../types/thread";
import { axiosInstance } from "../../../lib/axios";
import { useDispatch } from "react-redux";
import { SET_FOLOWING_COUNT } from "../../../store/rootRecuder";

export default function useSuggestion() {
  const [suggest, setSuggest] = useState<IUser[]>([]);
  const dispatch = useDispatch();

  const fetchSuggest = async () => {
    try {
      const response = await axiosInstance.get("/user/follow?type=sugestion");
      setSuggest(response.data.data);
    } catch (error) {
      // console.log(`error`, error);
    }
  };

  const handleFollow = async (
    userId: number,
    is_following: boolean | undefined
  ) => {
    try {
      const response = await axiosInstance.post(
        `/user/follow?following=${userId}`
      );
      console.log(response);
      dispatch(SET_FOLOWING_COUNT({ is_following }));

      fetchSuggest();
    } catch (error) {
      // console.log(`error`, error);
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
