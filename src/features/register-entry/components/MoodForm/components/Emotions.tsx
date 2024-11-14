import { useFormContext } from "../../../../../state/contexts/form.hook";
import { useEmotion } from "../../../../../state/hooks/emotions.hook";

export const Emotions = () => {
  const { bad, neutral, good } = useEmotion();
  const { emotions, setSelectedEmotions, selectedEmotions } = useFormContext();

  const handleCheckboxChange = (emotion: string) => {
    // @ts-ignore
    // eslint-disable-next-line
    setSelectedEmotions((prevState) =>
      prevState.includes(emotion)
        ? prevState.filter((e: string) => e !== emotion)
        : [...prevState, emotion]
    );
  };

  if (bad.isLoadingBad || neutral.isLoadingNeutral || good.isLoadingGood)
    return <div>Loading...</div>;
  if (bad.isErrorBad || neutral.isErrorNeutral || good.isErrorGood)
    return <div>Ocurred an error loading emotions</div>;

  return (
    <div className="flex flex-col">
      {emotions?.category === "bad" &&
        emotions.emotions.map((emotion, index) => (
          <label key={index}>
            <input
              value={emotion}
              type="checkbox"
              checked={selectedEmotions?.includes(emotion)}
              onChange={() => handleCheckboxChange(emotion)}
            />
            {emotion}
          </label>
        ))}
      {emotions?.category === "neutral" &&
        emotions.emotions.map((emotion, index) => (
          <label key={index}>
            <input
              value={emotion}
              type="checkbox"
              checked={selectedEmotions?.includes(emotion)}
              onChange={() => handleCheckboxChange(emotion)}
            />
            {emotion}
          </label>
        ))}
      {emotions?.category === "good" &&
        emotions.emotions.map((emotion, index) => (
          <label key={index}>
            <input
              value={emotion}
              type="checkbox"
              checked={selectedEmotions?.includes(emotion)}
              onChange={() => handleCheckboxChange(emotion)}
            />
            {emotion}
          </label>
        ))}
    </div>
  );
};
