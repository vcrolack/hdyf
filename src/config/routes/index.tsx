import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "../../layout/MainLayout";
import { Home } from "../../features/Home/Home";
import { History } from "../../features/history/History";
import { Mood } from "../../features/mood/Mood";
import { Authentication } from "../../features/auth/Authentication";

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="auth" element={<Authentication />} />
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
