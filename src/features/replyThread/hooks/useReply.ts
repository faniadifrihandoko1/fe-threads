import { ChangeEvent, useState } from "react";

import { IPostThread } from "../../../types/thread";
import { axiosInstance } from "../../../lib/axios";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { getThread } from "../../../store/redux/createAsync";

export default function useReply() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const [data, setData] = useState<IPostThread>({
    content: "",
    image: null,
  });

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
    console.log(data);
    try {
      const response = await axiosInstance.post(
        `/thread/reply/${id}`,
        formData
      );
      dispatch(getThread());
      //   dispatch(createReply(formData));
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    handleChange,
    handleSubmit,
  };
}
