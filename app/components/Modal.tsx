"use client";

import type { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modalBackdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="modalHeader">
          <h2 id="modal-title">{title}</h2>
          <button className="closeButton" onClick={onClose} type="button">
            Close
          </button>
        </div>
        {children}
      </section>
    </div>
  );
}
