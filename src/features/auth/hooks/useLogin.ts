import { ChangeEvent, useState } from "react";
import { IUserLogin } from "../../../types/auth";
import { axiosInstance } from "../../../lib/axios";
import { useDispatch } from "react-redux";
import { AUTH_LOGIN } from "../../../store/rootRecuder";

import { useNavigate } from "react-router-dom";

export function useLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      // console.log(form);
      const response = await axiosInstance.post("/login", form);
      // console.log(`response `, response);
      // console.log(response.data.token);
      // const user = jwtDecode(response.data.token);
      dispatch(AUTH_LOGIN(response.data.token));
      navigate("/");

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // const message = error.response.data.message;
      // dispatch(AUTH_LOGIN(message));
    }
  }
  return {
    handleChange,
    handleSubmit,
  };
}
