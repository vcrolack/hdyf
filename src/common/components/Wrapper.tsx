import React from "react";

export const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full h-full rounded-xl p-4 bg-color-primary">
      {children}
    </div>
  );
};
