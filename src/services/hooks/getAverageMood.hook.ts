import { useQuery } from "@tanstack/react-query";
import { GeneralMood } from "../../state/contexts/form.context";
import { getAverageMood } from "../emotions.service";

export const useGetAverageMood = () => {
  return useQuery<GeneralMood>({
    queryKey: ["average-mood"],
    queryFn: () => getAverageMood(),
  });
};
