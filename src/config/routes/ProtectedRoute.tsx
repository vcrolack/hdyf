import React from "react";
import { useAuth } from "../../common/hooks/auth.hook";
import { Navigate } from "react-router-dom";

export const ProtectedRoute: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <Navigate to="/auth" />;
  }

  return <>{children}</>;
};
