import { Details, Emotions, MoodSlider } from "./components";
import { useFormContext } from "../../../../state/contexts/form.hook";
import { FormState } from "../../../../common/interfaces/form-state.interface";
import { useAddEntry } from "../../hooks/add-document.hook";
import { useQueryClient } from "@tanstack/react-query";

export const MoodForm = () => {
  const queryClient = useQueryClient();
  const {
    step,
    nextStep,
    previousStep,
    specifyMood,
    generalMood,
    selectedEmotions,
    details,
    handleCloseModal,
  } = useFormContext();
  const mutation = useAddEntry();

  const maxStep = 2;

  const handleSubmit = () => {
    const newEntry: FormState = {
      generalMood: generalMood,
      specifyMood: specifyMood,
      emotions: selectedEmotions,
      details: details,
    };

    mutation.mutate(newEntry, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [`${generalMood}-entries`],
        });
        queryClient.invalidateQueries({
          queryKey: ["total-entries"],
        });
        queryClient.invalidateQueries({ queryKey: ["average-mood"] });
        handleCloseModal();
      },
    });
  };

  return (
    <form>
      {mutation.isPending ? (
        "Adding new entry..."
      ) : (
        <div>
          {step === 0 && <MoodSlider />}
          {step === 1 && <Emotions />}
          {step === 2 && <Details />}
        </div>
      )}

      <div className="my-10 flex justify-around">
        <button
          onClick={previousStep}
          disabled={step === 0}
          type="button"
          className="hover:underline disabled:opacity-50 disabled:no-underline"
        >
          Back
        </button>
        {step === maxStep ? (
          <button
            onClick={handleSubmit}
            type="button"
            className="bg-color-secondary p-2 rounded-lg hover:brightness-110 active:brightness-95"
          >
            Submit
          </button>
        ) : (
          <button
            onClick={nextStep}
            type="button"
            className="bg-color-secondary p-2 rounded-lg hover:brightness-110 active:brightness-95"
          >
            Continue
          </button>
        )}
      </div>
    </form>
  );
};
