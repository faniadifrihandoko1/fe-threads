import { ChangeEvent, useEffect, useState } from "react";
import { axiosInstance } from "../../../lib/axios";
import { IUser } from "../../../types/thread";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { getAllUser } from "../../../store/asyncThunk/createAsync";
import { RootState } from "../../../store/type/RootState";

export default function useSearch() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const data = useSelector((state: RootState) => state.user);
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<IUser[]>([]);
  console.log(`data`, data);
  const fetchUsers = async () => {
    try {
      const response = await axiosInstance.get(
        `user/follow?type=search&searchTerm=${search}`
      );
      setUsers(response.data.data);
    } catch (error) {
      // console.log(`error`, error);
    }
  };
  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    if (searchTerm.trim() !== "") {
      // Fetch users only if search term is not empty
      try {
        const response = await axiosInstance.get(
          `user/follow?type=search&searchTerm=${searchTerm}`
        );
        setUsers(response.data.data);
        console.log(`search`, searchTerm);
      } catch (error) {
        console.log(`error`, error);
      }
    } else {
      // If search term is empty, clear users list
      setUsers([]);
    }

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
      // console.log(error);
    }
  };

  useEffect(() => {
    dispatch(getAllUser());
    if (search.trim() !== "") {
      fetchUsers();
      console.log(`fetch`);
    } else {
      // If search term is empty, clear users list
      setUsers([]);
    }
  }, [search]);
  return {
    search,
    handleSearch,
    users,
    handleFollow,
  };
}
