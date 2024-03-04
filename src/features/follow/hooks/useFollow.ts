import { useEffect, useState } from "react";
import { axiosInstance } from "../../../lib/axios";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/type/RootState";
import {
  GET_FOLLOW,
  SET_FOLLOW,
  SET_FOLOWING_COUNT,
} from "../../../store/rootRecuder";

export default function useFollow() {
  const follow = useSelector((state: RootState) => state.follow.follow);
  const followUrl = useSelector((state: RootState) => state.follow.followURL);
  const [isFollow, setIsFollow] = useState(false);
  const dispatch = useDispatch();

  async function getFollow() {
    try {
      const response = await axiosInstance.get(
        `/user/follow?type=${followUrl}`
      );
      dispatch(GET_FOLLOW(response.data.data));
    } catch (error) {
      console.log(`Error get follow`, error);
    }
  }

  async function handleFollow(
    idFollow: number,
    is_following: boolean | undefined
  ) {
    try {
      await axiosInstance.post(`/user/follow?following=${idFollow}`);
      dispatch(SET_FOLLOW({ id: idFollow, is_following: is_following }));
      dispatch(SET_FOLOWING_COUNT({ is_following }));
      setIsFollow(!isFollow);
    } catch (error) {
      console.log(`Error handle follow`, error);
    }
  }

  useEffect(() => {
    getFollow();
    console.log(`test`);
  }, [followUrl, isFollow]);

  return {
    follow,
    handleFollow,
  };
  // const { fetchSuggest } = useSuggestion();
  // const [follower, setFollower] = useState([]);
  // const [following, setFollowing] = useState([]);

  // const fetchFollower = async () => {
  //   try {
  //     const response = await axiosInstance.get("/user/follow?type=follower");
  //     setFollower(response.data.data);
  //   } catch (error) {
  //     // console.log(`fetch follower`, error);
  //   }
  // };

  // const fetchFollowing = async () => {
  //   try {
  //     const response = await axiosInstance.get("/user/follow?type=following");
  //     setFollowing(response.data.data);
  //   } catch (error) {
  //     // console.log(`fetch following`, error);
  //   }
  // };

  // const handleFollow = async (idFollow: number) => {
  //   try {
  //     const response = await axiosInstance.post(
  //       `/user/follow?following=${idFollow}`
  //     );
  //     fetchFollower();
  //     fetchFollowing();
  //     fetchSuggest();
  //     console.log(`response handleFollow`, response);
  //   } catch (error) {
  //     // console.log(`handle Follow`, error);
  //   }
  // };

  // useEffect(() => {
  //   fetchFollower();
  //   fetchFollowing();
  // }, []);

  // return { follower, following, handleFollow, fetchFollowing, fetchFollower };
}
