"use client";
import React from "react";

export default function Card({ children, className }: any) {
  return (
    <div className={`rounded-3xl bg-gray-900 border border-gray-800 p-6 transition-transform transform hover:scale-105 hover:shadow-2xl ${className}`}>
      {children}
    </div>
  );
}