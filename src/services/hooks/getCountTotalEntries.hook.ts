import { useQuery } from "@tanstack/react-query";
import { getCountTotalEntries } from "../emotions.service";

export const useGetCountTotalEntries = () => {
  return useQuery<number>({
    queryKey: ["total-entries"],
    queryFn: () => getCountTotalEntries(),
  });
};
