import Login from "./components/Login";
import Register from "./components/Register";
import DetailStatus from "./pages/DetailStatus";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import ProfileEdit from "./pages/ProfileEdit";
import { axiosInstance, setAuthToken } from "./lib/axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AUTH_CHECK } from "./store/rootRecuder";

function App() {
  const dispatch = useDispatch();
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
    check();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail-status/:id" element={<DetailStatus />} />
      <Route path="/edit-profile/:id" element={<ProfileEdit />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
