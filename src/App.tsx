import Login from "./components/Login";
import Register from "./components/Register";

import Home from "./pages/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProfileEdit from "./pages/ProfileEdit";
import { axiosInstance, setAuthToken } from "./lib/axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AUTH_CHECK } from "./store/rootRecuder";
import FollowPage from "./pages/FollowPage";

import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage";
import DetailThreadPage from "./pages/DetailThreadPage";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { getAllUser } from "./store/asyncThunk/createAsync";

function App() {
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatchUser = useDispatch<ThunkDispatch<any, any, any>>();
  const navigate = useNavigate();
  async function check() {
    try {
      setAuthToken(localStorage.token);

      const response = await axiosInstance.get("/check");
      dispatch(AUTH_CHECK(response.data.data));
    } catch (error) {
      // console.log(error);
    }
  }

  useEffect(() => {
    if (!localStorage.token) {
      navigate("/login");
    } else {
      check();
      dispatchUser(getAllUser());
    }
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/follows" element={<FollowPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/detail-status/:id" element={<DetailThreadPage />} />
      <Route path="/edit-profile/:id" element={<ProfileEdit />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
