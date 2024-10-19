import { useAuth } from "../hooks/auth.hook";
import { Avatar } from "./";

export const Hero = () => {
  const { user } = useAuth();

  return (
    <div className="w-full text-center my-10 flex items-center gap-4">
      <Avatar url={user?.photoURL ?? ""} />
      <p className="font-semibold text-lg">Bienvenido, {user?.displayName}</p>
    </div>
  );
};
