import React from "react";
import { Entry } from "../../../../common/interfaces/entry.interface";
import { GeneralMood } from "../../../../state/contexts/form.context";
import { Badge, Modal } from "../../../../common/components";
import { formDate } from "../../../../common/utils/form-date.utils";

interface DetailMood {
  mood: GeneralMood;
  recentEntries: Entry[];
}

export const DetailMood: React.FC<DetailMood> = ({ mood, recentEntries }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const entryColor =
    mood === "good"
      ? "border-color-secondary"
      : mood === "neutral"
      ? "border-gray"
      : "border-introspection";
  const colorBadge =
    mood === "good"
      ? "bg-color-secondary"
      : mood === "neutral"
      ? "bg-gray-200"
      : "bg-introspection";
  const modalHandle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        id="resume-count-detail-mood"
        className="w-full h-1/4 p-4 bg-color-primary-hover rounded-lg"
      >
        <div id="detail-mood-title">
          <p className="font-bold text-lg">
            {mood.charAt(0).toUpperCase() + mood.slice(1).toLocaleLowerCase()}{" "}
            Entries
          </p>
        </div>
        <div id="detail-mood-resume" className="flex items-center ">
          <div
            id="detail-mood-count"
            className="w-1/4  h-full text-4xl flex justify-center"
          >
            <p>{recentEntries?.length ?? 0}</p>
          </div>
          <div id="detail-mood-last">
            {recentEntries?.length ? (
              recentEntries?.slice(0, 3).map((entry, index) => (
                <p key={index} className={`border-l-4 pl-1 ${entryColor}`}>
                  {entry.specifyMood} - {entry.details}
                </p>
              ))
            ) : (
              <p>No hay entradas para esta sección</p>
            )}
            <button
              onClick={modalHandle}
              className="pl-1 underline hover:text-color-secondary active:text-green-600"
            >
              ver más momentos...
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={modalHandle} title={`${mood} entries`}>
        <div className="w-full h-full py-10">
          {recentEntries.map((entry, index) => (
            <div
              className={`${
                index % 2 === 0 ? "bg-color-primary" : "bg-color-primary-hover"
              } rounded-lg`}
            >
              <div id="card">
                <div className="p-4 flex">
                  <div className="w-1/2">
                    <p>{entry.specifyMood}</p>
                    <p>{formDate(entry.createdAt)}</p>
                  </div>
                  <div id="details w-1/2">
                    <div className=" flex">
                      {entry.emotions.map((emotion) => (
                        <Badge color={colorBadge} text={emotion} />
                      ))}
                    </div>
                    <p>{entry.details}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
};
