import { useEffect, useState } from "react";
import { axiosInstance } from "../../../lib/axios";
import useSuggestion from "../../suggestion/hooks/useSuggestion";

export default function useFollow() {
  const { fetchSuggest } = useSuggestion();
  const [follower, setFollower] = useState([]);
  const [following, setFollowing] = useState([]);

  const fetchFollower = async () => {
    try {
      const response = await axiosInstance.get("/user/follow?type=follower");
      setFollower(response.data.data);
    } catch (error) {
      // console.log(`fetch follower`, error);
    }
  };

  const fetchFollowing = async () => {
    try {
      const response = await axiosInstance.get("/user/follow?type=following");
      setFollowing(response.data.data);
    } catch (error) {
      // console.log(`fetch following`, error);
    }
  };

  const handleFollow = async (idFollow: number) => {
    try {
      const response = await axiosInstance.post(
        `/user/follow?following=${idFollow}`
      );
      fetchFollower();
      fetchFollowing();
      fetchSuggest();
      console.log(`response handleFollow`, response);
    } catch (error) {
      // console.log(`handle Follow`, error);
    }
  };

  useEffect(() => {
    fetchFollower();
    fetchFollowing();
  }, []);

  return { follower, following, handleFollow, fetchFollowing, fetchFollower };
}
