import Login from "./features/auth/components/Login";
import Register from "./features/auth/components/Register";
import DetailStatus from "./pages/DetailStatus";
import Home from "./pages/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProfileEdit from "./pages/ProfileEdit";
import { axiosInstance, setAuthToken } from "./lib/axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_CHECK } from "./store/rootRecuder";
import FollowPage from "./pages/FollowPage";

import SearchPage from "./pages/SearchPage";
import ProfilePage from "./pages/ProfilePage";
import { RootState } from "./store/type/RootState";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { getThread } from "./store/asyncThunk/createAsync";
import OtherProfile from "./pages/OtherProfile";

function App() {
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatchThunk = useDispatch<ThunkDispatch<any, any, any>>();
  const navigate = useNavigate();
  const userId = useSelector((state: RootState) => state.auth.id);
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
      dispatchThunk(getThread(userId));
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/follows" element={<FollowPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/profile/:username" element={<OtherProfile />} />
      <Route path="/detail-status/:id" element={<DetailStatus />} />
      <Route path="/edit-profile/:id" element={<ProfileEdit />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
