import React from "react";

interface DetailMood {
  mood: "sadness" | "neutral" | "happiness";
  recentEntries: any[];
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
          <p>5</p>
        </div>
        <div id="detail-mood-last">
          {recentEntries.map((entry, index) => (
            <p key={index} className={`border-l-4 pl-1 ${entryColor}`}>
              {entry}
            </p>
          ))}
          <p className="pl-1 underline">ver más momentos...</p>
        </div>
      </div>
    </div>
  );
};
