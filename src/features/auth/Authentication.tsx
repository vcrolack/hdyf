import { useNavigate } from "react-router-dom";
import { google } from "../../assets";
import { useAuth } from "../../hooks/auth.hook";

export const Authentication = () => {
  const { signInWithGoogle, isLoading, isError } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate("/");
    } catch (error) {
      console.log("Error ocurred ", error);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div
        id="container-auth-section"
        className="w-1/3 h-1/3 p-4 bg-white rounded-lg flex flex-col justify-center items-center gap-4"
      >
        <p className="text-black font-bold text-2xl">
          Ingress with your account
        </p>
        <button
          onClick={handleLogin}
          className=" w-1/2 p-4 text-black border-gray-400 border-solid border-2 rounded-lg flex items-center gap-4 hover:bg-gray-50 active:bg-gray-100"
        >
          <img src={google} width="50px" height="50px" alt="" />
          <p>Get access with Google</p>
        </button>
        {isLoading && <p>Loading ...</p>}
        {isError && <p>Error ocurred</p>}
      </div>
    </div>
  );
};
