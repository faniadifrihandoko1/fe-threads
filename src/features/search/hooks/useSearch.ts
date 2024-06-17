import { ChangeEvent, useEffect, useState } from "react";
import { axiosInstance } from "../../../lib/axios";
import { IUser } from "../../../types/thread";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { getAllUser } from "../../../store/asyncThunk/createAsync";

export default function useSearch() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<IUser[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await axiosInstance.get(
        `/follow?type=search&searchTerm=${search}`
      );
      setUsers(response.data.data);
    } catch (error) {
      console.log(`error in fetch users`, error);
    }
  };
  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    if (searchTerm.trim() !== "") {
      // Fetch users only if search term is not empty
      try {
        const response = await axiosInstance.get(
          `/follow?type=search&searchTerm=${searchTerm}`
        );
        setUsers(response.data.data);
      } catch (error) {
        console.log(`error in fetch users follow`, error);
      }
    } else {
      setUsers([]);
    }
  };

  const handleFollow = async (idFollow: number) => {
    try {
      const response = await axiosInstance.post(
        `/follow?following=${idFollow}`
      );
      fetchUsers();
      console.log(response);
    } catch (error) {
      console.log("error in handle follow", error);
    }
  };

  useEffect(() => {
    dispatch(getAllUser());
    if (search.trim() !== "") {
      fetchUsers();
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
    fetchUsers,
  };
}
