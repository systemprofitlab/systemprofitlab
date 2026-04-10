import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`p-6 rounded-xl bg-gray-900 ${className}`}>
      {children}
    </div>
  );
}