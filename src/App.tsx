import Login from "./components/Login";
import Register from "./components/Register";
import DetailStatus from "./pages/DetailStatus";
import Home from "./pages/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProfileEdit from "./pages/ProfileEdit";
import { axiosInstance, setAuthToken } from "./lib/axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AUTH_CHECK } from "./store/rootRecuder";
import FollowPage from "./pages/FollowPage";

function App() {
  const dispatch = useDispatch();
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
    }
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/follows" element={<FollowPage />} />
      <Route path="/detail-status/:id" element={<DetailStatus />} />
      <Route path="/edit-profile/:id" element={<ProfileEdit />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
