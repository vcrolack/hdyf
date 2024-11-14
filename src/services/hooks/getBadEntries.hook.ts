import { useQuery } from "@tanstack/react-query";
import { Entry } from "../../common/interfaces/entry.interface";
import { getEntries } from "../emotions.service";

export const useGetBadEntries = () => {
  return useQuery<Entry[]>({
    queryKey: ["bad-entries"],
    queryFn: () => getEntries("bad"),
  });
};
