import React from "react";
import { useAuth } from "../../common/hooks/auth.hook";
import { Navigate } from "react-router-dom";
import { SkeletonLayout } from "../../common/components";

export const ProtectedRoute: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <SkeletonLayout />;
  }

  if (!user) {
    return <Navigate to="/auth" />;
  }

  return <>{children}</>;
};
