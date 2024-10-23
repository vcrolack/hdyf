import React from "react";
import { Emotions, MoodSlider } from "./components";

export const MoodForm = () => {
  const maxStep = 2;
  const [formStep, setFormStep] = React.useState(0);

  const continueForm = () => {
    setFormStep(formStep + 1);
  };

  const backForm = () => {
    setFormStep(formStep - 1);
  };

  return (
    <form action="">
      {formStep === 0 && <MoodSlider />}
      {formStep === 1 && <Emotions />}

      <div className="my-10 flex justify-around">
        <button
          onClick={backForm}
          disabled={formStep === 0}
          type="button"
          className="hover:underline disabled:opacity-50 disabled:no-underline"
        >
          Back
        </button>
        <button
          onClick={continueForm}
          type="button"
          className="bg-color-secondary p-2 rounded-lg hover:brightness-110 active:brightness-95"
        >
          {formStep === maxStep ? "Submit" : "Continue"}
        </button>
      </div>
    </form>
  );
};
