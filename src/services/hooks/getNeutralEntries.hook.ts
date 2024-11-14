import { useQuery } from "@tanstack/react-query";
import { Entry } from "../../common/interfaces/entry.interface";
import { getEntries } from "../emotions.service";

export const useGetNeutralEntries = () => {
  return useQuery<Entry[]>({
    queryKey: ["neutral-entries"],
    queryFn: () => getEntries("neutral"),
  });
};
