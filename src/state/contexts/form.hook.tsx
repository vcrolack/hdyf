import { useContext } from "react";
import { FormContext } from "./form.context";

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context)
    throw new Error("useFormContext must be use FormProvider inside");
  return context;
};
