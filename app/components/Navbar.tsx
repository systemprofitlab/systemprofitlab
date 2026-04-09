"use client";
import React, { useState, useEffect } from "react";
import Button from "./Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"} flex justify-between items-center px-8 py-4`}>
      <h1 className="text-2xl font-bold">SystemProfitLab</h1>
      <Button className="bg-indigo-500 hover:bg-indigo-600 px-6 py-2 rounded-3xl text-lg">
        Start Free
      </Button>
    </nav>
  );
}