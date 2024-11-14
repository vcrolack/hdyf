import { useMutation } from "@tanstack/react-query";
import { createNewEntry } from "../../../services/emotions.service";
import { MOOD_ENTRY_COLLECTION } from "../../../common/constants/firebase.constants";
import { FormState } from "../../../common/interfaces/form-state.interface";

export const useAddEntry = () => {
  return useMutation({
    mutationFn: (newEntry: FormState) =>
      createNewEntry(MOOD_ENTRY_COLLECTION, newEntry),
  });
};
