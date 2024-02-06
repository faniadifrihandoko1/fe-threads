import DetailStatus from "./pages/DetailStatus";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail-status" element={<DetailStatus />} />
    </Routes>
  );
}

export default App;
