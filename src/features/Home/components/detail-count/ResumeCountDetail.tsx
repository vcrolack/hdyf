import { DetailMood } from "./DetailMood";
import { DetailRecently } from "./DetailRecently";

const recentHappinessEntries = [
  "Bien - familia - hemos pasado un gran momento juntos",
  "Excelente - trabajo - logré finalizar el proyecto",
  "Bien - salud - me siento más enérgico",
];

const recentNeutralEntries = [
  "indiferente - trabajo - ha sido un día muy meh",
  "cansado - eventos actuales - tuve que salir mucho hoy",
  "aburrido",
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
      className="w-full h-full gap-y-4 rounded-lg flex flex-col justify-between"
    >
      <DetailRecently />
      <DetailMood mood="happiness" recentEntries={recentHappinessEntries} />
      <DetailMood mood="neutral" recentEntries={recentNeutralEntries} />
      <DetailMood mood="sadness" recentEntries={recentSadnessEntries} />
    </div>
  );
};
