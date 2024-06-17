import { useEffect, useState } from "react";
import { axiosInstance } from "../../../lib/axios";
import { IUser } from "../../../types/auth";
import { RootState } from "../../../store/type/RootState";
import { useSelector } from "react-redux";

export function useGetUser(username: string | undefined) {
  const userId = useSelector((state: RootState) => state.auth.id);
  const [users, setUsers] = useState<IUser>();
  const [isloading, setIsloading] = useState(false);
  console.log("user", users);
  const getUser = async () => {
    try {
      const response = await axiosInstance.get(`/user/username/${username}`);
      setUsers(response.data.data);
      setIsloading(true);
    } catch (error) {
      console.log(`error in get user`, error);
    }
  };

  const handleFollow = async (idFollow: number) => {
    try {
      await axiosInstance.post(`/follow?following=${idFollow}`);
      getUser();
    } catch (error) {
      console.log(`handle Follow`, error);
    }
  };
  const isUserLogin = () => {
    return users?.id === userId;
  };
  useEffect(() => {
    getUser();
  }, []);

  return { users, getUser, isloading, isUserLogin, handleFollow };
}
