import React from "react";
import { useFormContext } from "../../../../../state/contexts/form.hook";

const labels = [
  {
    display: "Very bad",
    name: "very bad",
    emoji: "😞",
  },
  {
    display: "Bad",
    name: "bad",
    emoji: "😔",
  },
  {
    display: "Neutral",
    name: "neutral",
    emoji: "😐",
  },
  {
    display: "Good",
    name: "good",
    emoji: "🙂",
  },
  {
    display: "Very good",
    name: "very good",
    emoji: "😊",
  },
];

export const MoodSlider = () => {
  const { setGeneralMood, setSpecifyMood, specifyMood, generalMood } =
    useFormContext();
  const [value, setValue] = React.useState<number>(2);

  const getDisplayValue = (value: number) => {
    if (value < 1) return 0; // "Very bad"
    if (value >= 1 && value < 1.9) return 1; // "Bad"
    if (value >= 1.9 && value <= 2.1) return 2; // "Neutral"
    if (value > 2.1 && value < 3.5) return 3; // "Good"
    return 4; // "Very good"
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = parseFloat(e.target.value);

    if (newValue < 0.2) newValue = 0;
    else if (newValue > 3.8) newValue = 4;

    setValue(newValue);

    if (newValue < 1) {
      setGeneralMood("bad");
      setSpecifyMood("very bad");
    } else if (newValue >= 1 && newValue < 2) {
      setGeneralMood("bad");
      setSpecifyMood("bad");
    } else if (newValue >= 1.9 && newValue <= 2.1) {
      setGeneralMood("neutral");
      setSpecifyMood("neutral");
    } else if (newValue > 2.1 && newValue < 3.5) {
      setGeneralMood("good");
      setSpecifyMood("good");
    } else if (newValue >= 3.5) {
      setGeneralMood("good");
      setSpecifyMood("very good");
    }

    console.log({ generalMood, specifyMood });
    console.log(newValue);
  };

  const displayValue = getDisplayValue(value);

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
          {labels[displayValue].display}
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
      <button type="button" onClick={() => console.log(specifyMood)}>
        loles
      </button>
    </div>
  );
};
