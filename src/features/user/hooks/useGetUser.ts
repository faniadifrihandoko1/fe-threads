import { useEffect, useState } from "react";
import { axiosInstance } from "../../../lib/axios";
import { IUser } from "../../../types/auth";

export function useGetUser(username: string | undefined) {
  console.log("username", username);
  const [users, setUsers] = useState<IUser>();
  const [isloading, setIsloading] = useState(false);
  const getUser = async () => {
    try {
      const response = await axiosInstance.get(`/user/username/${username}`);
      setUsers(response.data.data);
      setIsloading(true);
    } catch (error) {
      console.log(`error in get user`, error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return { users, getUser, isloading };
}
