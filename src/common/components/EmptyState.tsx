import React from "react";

interface EmptyState {
  content: string;
}

export const EmptyState: React.FC<EmptyState> = ({ content }) => {
  return (
    <div className="w-full text-center">
      <p>{content}</p>
    </div>
  );
};
