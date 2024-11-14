import { useQuery, useQueryClient } from "@tanstack/react-query";
import { firebaseAuth } from "../../config/firebase/firebase";
import {
  GoogleAuthProvider,
  User,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const verifyAuth = async (): Promise<User | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(firebaseAuth.currentUser);
    }, 1000);
  });
};

export const useAuth = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    data: user,
    isLoading,
    isError,
  } = useQuery<User | null>({
    queryKey: ["auth"],
    queryFn: verifyAuth,
    refetchOnWindowFocus: false,
  });

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(firebaseAuth, provider);

      queryClient.setQueryData(["auth"], result.user);
    } catch (error) {
      console.log("Occurred an error: ", error);
    }
  };

  const logout = async () => {
    await signOut(firebaseAuth);
    queryClient.clear();
    navigate("/auth");
  };

  return {
    user,
    isLoading,
    isError,
    signInWithGoogle,
    logout,
  };
};
