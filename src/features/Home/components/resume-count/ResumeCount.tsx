import { Skeleton } from "../../../../common/components/Skeleton";
import { useGetCountTotalEntries } from "../../../../services/hooks/getCountTotalEntries.hook";

export const ResumeCount = () => {
  const { data: countEntries, isFetching } = useGetCountTotalEntries();
  return isFetching ? (
    <Skeleton className="w-[275px] h-[688px]" />
  ) : (
    <div
      id="resume-count"
      className="w-1/4 h-full p-4 min-w-[270px] bg-color-primary-hover rounded-lg flex flex-col justify-center"
    >
      <div id="resume-count-title" className=" font-bold text-4xl text-center">
        Totally Entries
      </div>
      <div id="resume-count-value" className="text-center">
        <span className="text-8xl">{countEntries}</span>
      </div>
    </div>
  );
};
