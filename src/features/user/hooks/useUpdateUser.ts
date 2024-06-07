import { ChangeEvent, useEffect, useState } from "react";
import { IUpdateUser } from "../../../types/auth";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/type/RootState";
import { axiosInstance, setAuthToken } from "../../../lib/axios";
import { AUTH_CHECK } from "../../../store/rootRecuder";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { getThread } from "../../../store/asyncThunk/createAsync";
// import { AUTH_CHECK } from "../../../store/rootRecuder";

export function useUpdateUser() {
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatchThread = useDispatch<ThunkDispatch<any, any, any>>();
  const user = useSelector((state: RootState) => state.auth);
  const [form, setForm] = useState<IUpdateUser>({
    id: 0,
    username: "",
    fullName: "",
    email: "",
    photo_profile: "",
    photo_cover: "",
    bio: "",
  });

  useEffect(() => {
    setForm({
      id: user.id,
      username: user.username,
      fullName: user.fullName,
      email: user.email,
      photo_profile: user.photo_profile,
      photo_cover: user.photo_cover,
      bio: user.bio,
    });
  }, [user]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value, files } = e.target;
    if (files) {
      setForm({
        ...form,
        [name]: files[0],
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  }

  async function handleSubmit() {
    const formData = new FormData();
    const cover = new FormData();
    cover.append("photo_cover", form.photo_cover as File);
    formData.append("bio", form.bio as string);
    formData.append("email", form.email as string);
    formData.append("fullName", form.fullName as string);
    formData.append("username", form.username as string);
    formData.append("photo_profile", form.photo_profile as File);
    try {
      await axiosInstance.patch(`/user/${user.id}`, formData);
      await axiosInstance.patch(`/user/photo-cover/${user.id}`, cover);
      check();
    } catch (error) {
      console.log("error update user", error);
    }
  }

  async function check() {
    try {
      setAuthToken(localStorage.token);

      const response = await axiosInstance.get("/check");
      dispatch(AUTH_CHECK(response.data.data));
      dispatchThread(getThread(user.id));
    } catch (error) {
      console.log("error check", error);
    }
  }

  useEffect(() => {
    check();
  }, []);

  return {
    handleChange,
    handleSubmit,
    form,
    user,
    check,
  };
}
