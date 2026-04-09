"use client";
import React from "react";

export default function Testimonial({ quote, name }: any) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center">
      <p className="text-gray-300 mb-4">"{quote}"</p>
      <p className="text-indigo-400 font-semibold">{name}</p>
    </div>
  );
}