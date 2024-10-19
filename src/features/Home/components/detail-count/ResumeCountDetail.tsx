import { DetailMood } from "./DetailHappiness";
import { DetailRecently } from "./DetailRecently";

const recentHappinessEntries = [
  "Bien - familia - hemos pasado un gran momento juntos",
  "Excelente - trabajo - logré finalizar el proyecto",
  "Bien - salud - me siento más enérgico",
];

const recentSadnessEntries = [
  "Mal - trabajo - tuve un desacuerdo con mi jefe",
  "Triste - salud - no me siento bien físicamente",
  "Decepcionado - amigos - una discusión me afectó",
];

export const ResumeCountDetail = () => {
  return (
    <div
      id="resume-count-detail"
      className="w-full h-full rounded-lg flex flex-col justify-between"
    >
      <DetailRecently />
      <DetailMood mood="happiness" recentEntries={recentHappinessEntries} />
      <DetailMood mood="sadness" recentEntries={recentSadnessEntries} />
    </div>
  );
};
