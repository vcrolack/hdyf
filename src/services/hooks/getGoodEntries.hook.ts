import { useQuery } from "@tanstack/react-query";
import { Entry } from "../../common/interfaces/entry.interface";
import { getEntries } from "../emotions.service";

export const useGetGoodEntries = () => {
  return useQuery<Entry[]>({
    queryKey: ["good-entries"],
    queryFn: () => getEntries("good"),
  });
};
