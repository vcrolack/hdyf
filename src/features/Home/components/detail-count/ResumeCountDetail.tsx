import { DetailHappiness } from "./DetailHappiness";
import { DetailRecently } from "./DetailRecently";
import { DetailSadness } from "./DetailSadness";

export const ResumeCountDetail = () => {
  return (
    <div
      id="resume-count-detail"
      className="w-full h-full rounded-lg flex flex-col justify-between"
    >
      <DetailRecently />
      <DetailHappiness />
      <DetailSadness />
    </div>
  );
};
