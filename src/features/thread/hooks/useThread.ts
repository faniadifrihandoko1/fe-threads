import { ChangeEvent, useEffect, useState } from "react";
import { axiosInstance } from "../../../lib/axios";
import { IPostThread } from "../../../types/thread";
import { useDispatch } from "react-redux";
import { GET_THREAD } from "../../../store/rootRecuder";

function useThreads() {
  const dispatch = useDispatch();

  const [data, setData] = useState<IPostThread>({
    content: "",
    image: null,
  });
  const getThreads = async () => {
    try {
      const response = await axiosInstance.get("/thread");
      dispatch(GET_THREAD(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getThreads();
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

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("content", data.content);
    formData.append("image", data.image as File);
    console.log(formData);

    try {
      const response = await axiosInstance.post("/thread", formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getThreads,
    handleChange,
    handleSubmit,
    data,
  };
}

export default useThreads;
