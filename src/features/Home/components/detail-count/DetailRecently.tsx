import { Skeleton } from "../../../../common/components/Skeleton";
import { useGetAverageMood } from "../../../../services/hooks";

export const DetailRecently = () => {
  const { data: averageMood, isFetching } = useGetAverageMood();
  const emojiMood =
    averageMood === "good" ? "😊" : averageMood === "neutral" ? "😐" : "😞";
  return (
    <div
      id="resume-count-detail-recently"
      className="w-full h-1/4 flex gap-x-4"
    >
      {isFetching ? (
        <Skeleton className="w-full h-[158px]" />
      ) : (
        <div
          id="resume-count-detail-recently-mean"
          className="w-1/2 h-full p-4 bg-color-primary-hover rounded-lg flex flex-col gap-y-8"
        >
          <p className="font-bold text-3xl">Average Mood</p>
          <p className="font-bold text-4xl text-center">{averageMood}</p>
        </div>
      )}
      {isFetching ? (
        <Skeleton className="w-full h-[158px]" />
      ) : (
        <div
          id="resume-count-detail-recently-detail"
          className="w-1/2 h-full bg-color-primary-hover rounded-lg flex justify-center items-center"
        >
          <p className="text-7xl">{emojiMood}</p>
        </div>
      )}
    </div>
  );
};
