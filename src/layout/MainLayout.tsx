import { Outlet } from "react-router-dom";
import { Header } from "./header/Header";
import { Wrapper } from "../common/components/Wrapper";
import { Hero } from "../common/components/Hero";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="w-full h-[900px] flex justify-center">
        <div className="w-4/5 h-4/5">
          <Hero />
          <Wrapper>
            <Outlet />
          </Wrapper>
        </div>
      </main>
    </>
  );
};
