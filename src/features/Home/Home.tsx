import { Wrapper } from "../../common/components/Wrapper";
import { ResumeCount, ResumeCountDetail } from "./components";

export const Home = () => {
  return (
    <div className="w-4/5 h-4/5">
      <Wrapper>
        <div className="w-full h-full flex gap-x-4">
          <ResumeCount />
          <ResumeCountDetail />
        </div>
      </Wrapper>
    </div>
  );
};
