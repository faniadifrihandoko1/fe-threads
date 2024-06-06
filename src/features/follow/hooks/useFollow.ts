import { useEffect, useState } from "react";
import { axiosInstance } from "../../../lib/axios";
import useSuggestion from "../../suggestion/hooks/useSuggestion";
import { useUpdateUser } from "../../user/hooks/useUpdateUser";

export default function useFollow() {
  const { check } = useUpdateUser();
  const { fetchSuggest } = useSuggestion();
  const [follower, setFollower] = useState([]);
  const [following, setFollowing] = useState([]);
  const [isloadingFollower, setIsloadingFollower] = useState(false);
  const [isloadingFollowing, setIsloadingFollowing] = useState(false);

  const fetchFollower = async () => {
    try {
      const response = await axiosInstance.get("/user/follow?type=follower");
      setFollower(response.data.data);
      setIsloadingFollower(true);
    } catch (error) {
      // console.log(`fetch follower`, error);
    }
  };

  const fetchFollowing = async () => {
    try {
      const response = await axiosInstance.get("/user/follow?type=following");
      setFollowing(response.data.data);
      setIsloadingFollowing(true);
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
      check();
      console.log(`response handleFollow`, response);
    } catch (error) {
      // console.log(`handle Follow`, error);
    }
  };

  useEffect(() => {
    fetchFollower();
    fetchFollowing();
  }, []);

  return {
    follower,
    following,
    handleFollow,
    fetchFollowing,
    fetchFollower,
    isloadingFollower,
    isloadingFollowing,
  };
}
