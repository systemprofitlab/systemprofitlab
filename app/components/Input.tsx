"use client";
import React from "react";

export default function Input({ className, ...props }: any) {
  return (
    <input
      className={`rounded-3xl border-2 border-indigo-500 p-4 text-black w-full md:w-auto focus:ring-2 focus:ring-indigo-400 ${className}`}
      {...props}
    />
  );
}