import { ChangeEvent, useState } from "react";

import { IPostThread } from "../../../types/thread";

import { getThread } from "../../../store/asyncThunk/createAsync";
import { axiosInstance } from "../../../lib/axios";
import { useAppDispatch, useAppSelector } from "../../../store/type/RootState";

function useThreads() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.auth.id);
  const [modals, setModals] = useState<{ [key: number]: boolean }>({});
  const dataThread = useAppSelector((state) => state.threads);
  const isloadingThread = useAppSelector((state) => state.threads.isloading);
  const [data, setData] = useState<IPostThread>({
    content: "",
    image: null,
  });

  //  untuk mengambil input create thread
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "image" && files && files.length > 0) {
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

  // untuk mengirim thread
  const handleSubmit = async () => {
    setTimeout(() => {
      setData({ content: "", image: null });
    }, 1000);
    const formData = new FormData();
    formData.append("content", data.content as string);
    formData.append("image", data.image as File);

    try {
      await axiosInstance.post("/thread", formData);
      dispatch(getThread(userId));
    } catch (error) {
      console.log("error thread", error);
    }
  };

  // untuk modal
  const handleModal = (id: number) => {
    setModals((prevModals) => ({
      ...prevModals,
      [id]: !prevModals[id],
    }));
  };

  // untuk like
  const handleLike = async (threadId: number) => {
    try {
      await axiosInstance.post(`/thread/like/${threadId}`);
      dispatch(getThread(userId));
    } catch (error) {
      console.log("error like", error);
    }
  };
  return {
    handleChange,
    handleSubmit,
    handleLike,
    handleModal,
    modals,
    dataThread,
    isloadingThread,
    data,
    setData,
  };
}

export default useThreads;
