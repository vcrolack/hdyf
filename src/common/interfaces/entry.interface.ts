import { GeneralMood, SpecifyMood } from "../../state/contexts/form.context";

export interface Entry {
  id: string;
  createdAt: string;
  details: string;
  emotions: string[];
  generalMood: GeneralMood;
  specifyMood: SpecifyMood;
  userId: string;
}
