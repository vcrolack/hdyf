import { Outlet } from "react-router-dom";
import { Header } from "./header/Header";
import { Wrapper } from "../common/components/Wrapper";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="w-full h-[900px] flex justify-center pt-16">
        <div className="w-4/5 h-4/5">
          <Wrapper>
            <Outlet />
          </Wrapper>
        </div>
      </main>
    </>
  );
};
