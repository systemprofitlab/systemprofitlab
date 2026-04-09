"use client";
import React from "react";

export default function Button({ children, className, onClick }: any) {
  return (
    <button
      className={`transition-all duration-300 hover:scale-105 hover:shadow-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}