import React from "react";

interface ModalProps extends React.PropsWithChildren {
  isOpen: boolean;
  title: string;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  if (!isOpen) return;
  return (
    isOpen && (
      <div className="bg-black bg-opacity-50 backdrop-blur-sm fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-color-primary-hover p-6 rounded-lg shadow-lg w-2/5 max-h-[925px] overflow-auto scrollbar-hidden">
          <div className="w-full flex justify-between items-center">
            <p className="w-4/5 text-lg font-bold">{title}</p>
            <button
              className="text-right text-3xl hover:text-color-secondary"
              onClick={onClose}
            >
              &times;
            </button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    )
  );
};
