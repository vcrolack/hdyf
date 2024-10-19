import { ResumeCount, ResumeCountDetail } from "./components";

export const Home = () => {
  return (
    <div className="w-full h-full flex gap-x-4">
      <ResumeCount />
      <ResumeCountDetail />
    </div>
  );
};
