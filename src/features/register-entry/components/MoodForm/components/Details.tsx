import { useFormContext } from "../../../../../state/contexts/form.hook";

export const Details = () => {
  const { setDetails, specifyMood, selectedEmotions, generalMood } =
    useFormContext();

  const moodColor =
    generalMood === "bad"
      ? "bg-introspection"
      : generalMood === "neutral"
      ? "bg-gray-600"
      : "bg-color-secondary";

  return (
    <div className="w-full flex flex-col items-center justify-center mt-4 gap-y-4">
      <p className="pb-4 text-4xl font-thin">{specifyMood}</p>
      <div className="flex">
        {selectedEmotions.map((emotion, index) => (
          <p
            className={`mx-2 py-1 px-3 ${moodColor} bg-gra rounded-xl `}
            key={index}
          >
            {emotion}
          </p>
        ))}
      </div>
      <input
        className="w-1/2 h-5 p-4 text-black border-none rounded-lg "
        maxLength={50}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setDetails(event.target.value)
        }
      />
    </div>
  );
};
