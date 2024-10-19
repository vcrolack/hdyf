export const DetailRecently = () => {
  return (
    <div
      id="resume-count-detail-recently"
      className="w-full h-1/4 flex gap-x-4"
    >
      <div
        id="resume-count-detail-recently-mean"
        className="w-1/2 h-full p-4 bg-color-primary-hover rounded-lg flex flex-col gap-y-8"
      >
        <p className="font-bold text-3xl">Average Mood</p>
        <p className="font-bold text-4xl text-center">Neutral</p>
      </div>
      <div
        id="resume-count-detail-recently-detail"
        className="w-1/2 h-full bg-color-primary-hover rounded-lg flex justify-center items-center"
      >
        <p className="text-7xl">😐</p>
      </div>
    </div>
  );
};
