import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
      <div className="bg-gray-900 p-6 rounded-xl relative w-full max-w-md">
        <button
          className="absolute top-2 right-3 text-white"
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}