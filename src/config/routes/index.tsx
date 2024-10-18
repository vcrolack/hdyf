import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../../App";
import { MainLayout } from "../../layout/MainLayout";
import { Home } from "../../features/Home/Home";
import { History } from "../../features/history/History";
import { Mood } from "../../features/mood/Mood";

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="auth" element={<App />} />
    </Routes>

    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/mood" element={<Mood />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
