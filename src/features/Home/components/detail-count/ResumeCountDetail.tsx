import { Skeleton } from "../../../../common/components/Skeleton";
import {
  useGetNeutralEntries,
  useGetGoodEntries,
  useGetBadEntries,
} from "../../../../services/hooks";
import { DetailMood } from "./DetailMood";
import { DetailRecently } from "./DetailRecently";

export const ResumeCountDetail = () => {
  const { data: goodEntries, isFetching: isFetchingGoodEntries } =
    useGetGoodEntries();
  const { data: neutralEntries, isFetching: isFetchingNeutralEntries } =
    useGetNeutralEntries();
  const { data: badEntries, isFetching: isFetchingBadEntries } =
    useGetBadEntries();

  return (
    <div
      id="resume-count-detail"
      className="w-full h-full gap-y-4 rounded-lg flex flex-col justify-between"
    >
      <DetailRecently />
      {isFetchingGoodEntries ? (
        <Skeleton className="w-full h-[160px]" />
      ) : (
        <DetailMood mood="good" recentEntries={goodEntries ?? []} />
      )}
      {isFetchingNeutralEntries ? (
        <Skeleton className="w-full h-[160px]" />
      ) : (
        <DetailMood mood="neutral" recentEntries={neutralEntries ?? []} />
      )}
      {isFetchingBadEntries ? (
        <Skeleton className="w-full h-[160px]" />
      ) : (
        <DetailMood mood="bad" recentEntries={badEntries ?? []} />
      )}
    </div>
  );
};
