import { useQuery, useQueryClient } from "@tanstack/react-query";
import { firebaseAuth } from "../config/firebase/firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const verifyAuth = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(firebaseAuth.currentUser);
    }, 1000);
  });
};

export const useAuth = () => {
  const queryClient = useQueryClient();

  const {
    data: user,
    isLoading,
    isError,
  } = useQuery({
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
    queryClient.setQueryData(["auth"], null);
  };

  return {
    user,
    isLoading,
    isError,
    signInWithGoogle,
    logout,
  };
};
