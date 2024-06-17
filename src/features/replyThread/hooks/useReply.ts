import { ChangeEvent, useEffect, useState } from "react";

import { IPostThread } from "../../../types/thread";
import { axiosInstance } from "../../../lib/axios";
import {
  getThread,
  getThreadById,
} from "../../../store/asyncThunk/createAsync";
import { useAppDispatch, useAppSelector } from "../../../store/type/RootState";
import { useParams } from "react-router-dom";

export default function useReply() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.auth.id);
  const { id } = useParams();
  const threadId = Number(id);
  const dataThreadById = useAppSelector((state) => state.threadById.threadById);
  const [data, setData] = useState<IPostThread>({
    content: "",
    image: null,
  });

  const handleLike = async (threadId: number) => {
    try {
      await axiosInstance.post(`/thread/like/${threadId}`);

      dispatch(getThreadById({ threadId, userId }));
    } catch (error) {
      console.log("error like", error);
    }
  };
  useEffect(() => {
    dispatch(getThreadById({ threadId, userId }));
    dispatch(getThread(userId));
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (files) {
      setData({
        ...data,
        [name]: files[0],
      });
    } else {
      setData({
        ...data,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (id: number) => {
    const formData = new FormData();
    formData.append("content", data.content as string);
    formData.append("image", data.image as File);
    try {
      await axiosInstance.post(`/thread/reply/${id}`, formData);
      dispatch(getThreadById({ threadId, userId }));
    } catch (error) {
      console.log("error reply", error);
    }
  };
  return {
    handleChange,
    handleSubmit,
    dataThreadById,
    getThreadById,
    handleLike,
  };
}
