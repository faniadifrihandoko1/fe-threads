import { ChangeEvent, useState } from "react";
// import { axiosInstance } from "../../../lib/axios";
import { IPostThread } from "../../../types/thread";

// import { createThread, getThread } from "../../../store/slices/Test";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { createThread, getThread } from "../../../store/redux/createAsync";

function useThreads() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
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
      dispatch(getThread());
    } catch (error) {
      // console.log(error);
    }
  };

  return {
    handleChange,
    handleSubmit,
    data,
  };
}

export default useThreads;
