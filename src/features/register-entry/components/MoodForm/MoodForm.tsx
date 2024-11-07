import { Emotions, MoodSlider } from "./components";
import { useFormContext } from "../../../../state/contexts/form.hook";

export const MoodForm = () => {
  const { step, nextStep, previousStep } = useFormContext();

  const maxStep = 2;

  return (
    <form action="">
      {step === 0 && <MoodSlider />}
      {step === 1 && <Emotions />}

      <div className="my-10 flex justify-around">
        <button
          onClick={previousStep}
          disabled={step === 0}
          type="button"
          className="hover:underline disabled:opacity-50 disabled:no-underline"
        >
          Back
        </button>
        <button
          onClick={nextStep}
          type="button"
          className="bg-color-secondary p-2 rounded-lg hover:brightness-110 active:brightness-95"
        >
          {step === maxStep ? "Submit" : "Continue"}
        </button>
      </div>
    </form>
  );
};
