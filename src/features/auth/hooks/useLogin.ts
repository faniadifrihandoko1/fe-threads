import { ChangeEvent, useState } from "react";
import { IUserLogin } from "../../../types/auth";
import { axiosInstance } from "../../../lib/axios";
import { useDispatch } from "react-redux";
import { AUTH_LOGIN } from "../../../store/rootRecuder";

import { useNavigate } from "react-router-dom";

export function useLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [form, setForm] = useState<IUserLogin>({
    email: "",
    password: "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  async function handleSubmit() {
    try {
      const response = await axiosInstance.post("/login", form);
      dispatch(AUTH_LOGIN(response.data.token));
      navigate("/");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);

      setMessage(error.response.data.message);
    }
  }
  return {
    handleChange,
    handleSubmit,
    message,
  };
}
