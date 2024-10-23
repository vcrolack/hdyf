import { useQueries } from "@tanstack/react-query";
import { getEmotionsByCategory } from "../../services/emotions.service";

export const useEmotion = () => {
  const results = useQueries({
    queries: [
      {
        queryKey: ["badEmotions"],
        queryFn: () => getEmotionsByCategory("bad"),
      },
      {
        queryKey: ["neutralEmotions"],
        queryFn: () => getEmotionsByCategory("neutral"),
      },
      {
        queryKey: ["goodEmotions"],
        queryFn: () => getEmotionsByCategory("good"),
      },
    ],
  });

  const {
    data: badEmotions,
    isLoading: isLoadingBad,
    isError: isErrorBad,
  } = results[0];
  const {
    data: neutralEmotions,
    isLoading: isLoadingNeutral,
    isError: isErrorNeutral,
  } = results[1];
  const {
    data: goodEmotions,
    isLoading: isLoadingGood,
    isError: isErrorGood,
  } = results[2];

  const bad = {
    badEmotions,
    isLoadingBad,
    isErrorBad,
  };

  const neutral = {
    neutralEmotions,
    isLoadingNeutral,
    isErrorNeutral,
  };

  const good = {
    goodEmotions,
    isLoadingGood,
    isErrorGood,
  };

  return {
    bad,
    neutral,
    good,
  };
};
