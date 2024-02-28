import { ChangeEvent, useState } from "react";
// import { axiosInstance } from "../../../lib/axios";
import { IPostThread } from "../../../types/thread";

// import { createThread, getThread } from "../../../store/slices/Test";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { createThread, getThread } from "../../../store/redux/createAsync";
import { axiosInstance } from "../../../lib/axios";
import { RootState } from "../../../store/type/RootState";
// import { RootState } from "../../../store/type/RootState";

function useThreads() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const userId = useSelector((state: RootState) => state.auth.id);
  // const userId = useSelector((state: RootState) => state.auth.id);
  // const dispatch = useDispatch();

  const [data, setData] = useState<IPostThread>({
    content: "",
    image: null,
  });
  // const getThreads = async () => {
  //   try {
  //     const response = await axiosInstance.get("/thread");
  //     // dispatch(GET_THREAD(response.data));
  //   } catch (error) {
  //     // console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getThreads();
  // }, []);

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

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("content", data.content as string);
    formData.append("image", data.image as File);

    try {
      dispatch(createThread(formData));
      dispatch(getThread(userId));
    } catch (error) {
      // console.log(error);
    }
  };

  const handleLike = async (threadId: number) => {
    try {
      const response = await axiosInstance.post(`/thread/like/${threadId}`);
      console.log(`response like`, response);
      // dispatch(likeThread(threadId));
      dispatch(getThread(userId));
    } catch (error) {
      console.log(error);
    }
  };
  return {
    handleChange,
    handleSubmit,
    data,
    handleLike,
  };
}

export default useThreads;
