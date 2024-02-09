import Login from "./components/Login";
import Register from "./components/Register";
import DetailStatus from "./pages/DetailStatus";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail-status/:id" element={<DetailStatus />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
