import { ChangeEvent, useEffect, useState } from "react";
import { axiosInstance } from "../../../lib/axios";
import { IUser } from "../../../types/thread";

export default function useSearch() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<IUser[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await axiosInstance.get(
        `user/follow?type=search&searchTerm=${search}`
      );
      setUsers(response.data.data);
    } catch (error) {
      console.log(`error`, error);
    }
  };
  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    // try {
    //   const response = await axiosInstance.get(
    //     `user/follow?type=search&searchTerm=${e.target.value}`
    //   );
    //   setUsers(response.data.data);
    //   console.log(`search`, search);
    // } catch (error) {
    //   console.log(`error`, error);
    // }
  };

  const handleFollow = async (idFollow: number) => {
    try {
      const response = await axiosInstance.post(
        `/user/follow?following=${idFollow}`
      );
      fetchUsers();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
    console.log(`fetch`);
  }, [search]);
  return {
    search,
    handleSearch,
    users,
    handleFollow,
  };
}
