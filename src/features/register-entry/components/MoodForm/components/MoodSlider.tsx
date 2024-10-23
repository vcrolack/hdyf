import React from "react";

const labels = [
  {
    name: "Very bad",
    emoji: "😞",
  },
  {
    name: "Bad",
    emoji: "😔",
  },
  {
    name: "Neutral",
    emoji: "😐",
  },
  {
    name: "Good",
    emoji: "🙂",
  },
  {
    name: "Very good",
    emoji: "😊",
  },
];

export const MoodSlider = () => {
  const [value, setValue] = React.useState<number>(2);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  const displayValue = Math.round(value);

  return (
    <div className=" flex flex-col items-center">
      <label
        htmlFor="mood-slider"
        className="mb-4 text-lg font-semibold flex flex-col items-center"
      >
        How do you feel?
        <div className="mt-4 text-6xl font-bold">
          {labels[displayValue].emoji}
        </div>
        <div className="mt-4 text-2xl font-bold">
          {labels[displayValue].name}
        </div>
      </label>
      <input
        type="range"
        id="mood-slider"
        min="0"
        max="4"
        step="0.1"
        value={value}
        onChange={handleChange}
        className="w-64"
      />
    </div>
  );
};
