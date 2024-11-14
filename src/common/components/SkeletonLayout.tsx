import { Skeleton } from "./Skeleton";
import { Wrapper } from "./Wrapper";

export const SkeletonLayout = () => {
  return (
    <div>
      <div className="w-full flex flex-col items-center">
        <Skeleton className="w-[620px] h-[112px] flex rounded-tl-none rounded-tr-none" />

        <div className="w-4/5 h-4/5">
          <div className="h-20"></div>
          <Wrapper>
            <Skeleton className="h-[720px]" />
          </Wrapper>
        </div>
      </div>
    </div>
  );
};
