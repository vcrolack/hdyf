import { useEmotion } from "../../../../../state/hooks/emotions.hook";

export const Emotions = () => {
  const { bad, neutral, good } = useEmotion();

  if (bad.isLoadingBad || neutral.isLoadingNeutral || good.isLoadingGood)
    return <div>Loading...</div>;
  if (bad.isErrorBad || neutral.isErrorNeutral || good.isErrorGood)
    return <div>Ocurred an error loading emotions</div>;

  return (
    <div>
      <label htmlFor="emotions-checkbox"></label>
    </div>
  );
};
