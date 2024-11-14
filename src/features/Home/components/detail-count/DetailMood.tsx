import React from "react";
import { Entry } from "../../../../common/interfaces/entry.interface";

interface DetailMood {
  mood: "sadness" | "neutral" | "happiness";
  recentEntries: Entry[];
}

export const DetailMood: React.FC<DetailMood> = ({ mood, recentEntries }) => {
  const entryColor =
    mood === "happiness"
      ? "border-color-secondary"
      : mood === "neutral"
      ? "border-gray"
      : "border-introspection";
  return (
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
            recentEntries?.slice(-3).map((entry, index) => (
              <p key={index} className={`border-l-4 pl-1 ${entryColor}`}>
                {entry.specifyMood} - {entry.details}
              </p>
            ))
          ) : (
            <p>No hay entradas para esta sección</p>
          )}
          <p className="pl-1 underline">ver más momentos...</p>
        </div>
      </div>
    </div>
  );
};
