import { soon } from "../../assets";

export const Soon = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-28">
      <div className="w-1/2 h-1/2">
        <img src={soon} alt="" />
      </div>
      <p className="text-7xl">Proximamente...</p>
    </div>
  );
};
