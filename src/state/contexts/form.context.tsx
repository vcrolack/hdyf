import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getEmotionsByCategory } from "../../services/emotions.service";

export type SpecifyMood = "very good" | "good" | "neutral" | "bad" | "very bad";
export type GeneralMood = "good" | "neutral" | "bad";
interface FormContextProps {
  step: number;
  previousStep: () => void;
  nextStep: () => void;
  generalMood: GeneralMood;
  setGeneralMood: (mood: "good" | "neutral" | "bad") => void;
  specifyMood: SpecifyMood;
  setSpecifyMood: (specifyMood: SpecifyMood) => void;
  selectedEmotions: string[];
  setSelectedEmotions: (emotions: string[]) => void;
  emotions: { category: string; emotions: string[] } | undefined;
  details: string;
  setDetails: (details: string) => void;
  isLoading: boolean;
  isError: boolean;
  clearFormState: () => void;
  closeModal: boolean;
  handleCloseModal: () => void;
}

export const FormContext = React.createContext<FormContextProps | undefined>(
  undefined
);

export const FormProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [step, setStep] = React.useState<number>(0);
  const [generalMood, setGeneralMood] = React.useState<
    "good" | "neutral" | "bad"
  >("neutral");
  const [specifyMood, setSpecifyMood] = React.useState<
    "very good" | "good" | "neutral" | "bad" | "very bad"
  >("neutral");
  const [selectedEmotions, setSelectedEmotions] = React.useState<string[]>([]);
  const [details, setDetails] = React.useState<string>("");
  const [closeModal, setCloseModal] = React.useState<boolean>(false);

  const {
    data: emotions,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["emotions", generalMood],
    queryFn: () => getEmotionsByCategory(generalMood!),
    enabled: !!generalMood && step === 1,
  });

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const previousStep = () => setStep((prevStep) => prevStep - 1);

  const clearFormState = () => {
    setStep(0);
    setGeneralMood("neutral");
    setSpecifyMood("neutral");
    setSelectedEmotions([]);
    setDetails("");
  };

  const handleCloseModal = () => {
    setCloseModal(!closeModal);
    clearFormState();
  };
  return (
    <FormContext.Provider
      value={{
        step,
        nextStep,
        previousStep,
        generalMood,
        setGeneralMood,
        specifyMood,
        setSpecifyMood,
        emotions,
        isLoading,
        isError,
        selectedEmotions,
        setSelectedEmotions,
        details,
        setDetails,
        clearFormState,
        closeModal,
        handleCloseModal,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
