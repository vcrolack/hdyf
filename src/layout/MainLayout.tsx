import { Outlet } from "react-router-dom";
import { Header } from "./header/Header";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="w-full h-[900px] flex justify-center pt-16">
        <Outlet />
      </main>
    </>
  );
};
