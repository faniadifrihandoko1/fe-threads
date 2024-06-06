import { useState } from "react";
import { axiosInstance } from "../../../lib/axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/type/RootState";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { getThread } from "../../../store/asyncThunk/createAsync";
import { IThread } from "../../../types/thread";

function useMyThreads() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const thread = useSelector((state: RootState) => state.threads.threads);
  const isloading = useSelector((state: RootState) => state.threads.isloading);
  const userId = useSelector((state: RootState) => state.auth.id);
  const [modals, setModals] = useState<{ [key: number]: boolean }>({});

  const mappedThread = thread.filter((item: IThread) => {
    return item.user?.id === userId;
  });

  const handleModal = (id: number) => {
    setModals((prevModals) => ({
      ...prevModals,
      [id]: !prevModals[id],
    }));
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await axiosInstance.delete(`/thread/${id}`);
      console.log(response);
      dispatch(getThread(userId));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    modals,
    handleModal,
    handleDelete,
    mappedThread,
    isloading,
  };
}

export default useMyThreads;
