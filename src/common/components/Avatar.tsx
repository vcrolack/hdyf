import React from "react";

interface AvatarProps {
  url: string;
}

export const Avatar: React.FC<AvatarProps> = ({ url }) => {
  return (
    <div className="w-10 h-10 rounded-full">
      <img className="rounded-full" src={url} alt="pfp" />
    </div>
  );
};
