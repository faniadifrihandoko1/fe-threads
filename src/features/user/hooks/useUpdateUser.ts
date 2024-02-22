import { ChangeEvent, useState } from "react";
import { IUser } from "../../../types/auth";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/type/RootState";
import { axiosInstance } from "../../../lib/axios";

export function useUpdateUser() {
  const user = useSelector((state: RootState) => state.auth);
  const [form, setForm] = useState<IUser>({
    id: user.id,
    username: user.username,
    fullName: user.fullName,
    email: user.email,
    photo_profile: user.photo_profile,
    bio: user.bio,
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  async function handleSubmit() {
    console.log(form);
    const response = await axiosInstance.put(`/user/${user.id}`, form);
    console.log(response);
  }

  return {
    handleChange,
    handleSubmit,
    form,
  };
}
