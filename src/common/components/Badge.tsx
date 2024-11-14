import React from "react";

interface BadgeProps {
  text: string;
  color: string;
}

export const Badge: React.FC<BadgeProps> = ({ text, color }) => {
  return (
    <div
      className={`${color} px-2  text-xs rounded-md text-center bg-opacity-40 m-1`}
    >
      <p>{text}</p>
    </div>
  );
};
