import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SceneDetail from "../pages/SceneDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/scene/*" element={<SceneDetail />} />
    </Routes>
  );
};

export default AppRoutes;
