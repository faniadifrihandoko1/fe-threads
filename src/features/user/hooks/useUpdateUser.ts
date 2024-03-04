import { ChangeEvent, useEffect, useState } from "react";
import { IUser } from "../../../types/auth";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/type/RootState";
import { axiosInstance, setAuthToken } from "../../../lib/axios";
// import { AUTH_CHECK } from "../../../store/rootRecuder";

export function useUpdateUser() {
  // const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth);
  const [form, setForm] = useState<IUser>({
    id: user.id,
    username: user.username,
    fullName: user.fullName,
    email: user.email,
    photo_profile: user.photo_profile,
    bio: user.bio,
    follower_count: user.follower_count,
    following_count: user.following_count,
  });

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
    formData.append("content", form.bio as string);
    formData.append("content", form.email as string);
    formData.append("content", form.fullName as string);
    formData.append("content", form.username as string);
    formData.append("image", form.photo_profile as File);
    try {
      const response = await axiosInstance.put(`/user/${user.id}`, form);
      check();
      console.log(response);
      console.log(form);
    } catch (error) {
      console.log(error);
    }
  }

  async function check() {
    try {
      setAuthToken(localStorage.token);

      const response = await axiosInstance.get("/check");
      // dispatch(AUTH_CHECK(response.data.data));
      console.log(response);
    } catch (error) {
      // console.log(error);
    }
  }

  useEffect(() => {
    check();
  }, []);

  return {
    handleChange,
    handleSubmit,
    form,
  };
}
