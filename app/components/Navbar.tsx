"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const update = () => setSolid(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className={`navbar ${solid ? "solid" : ""}`}>
      <a className="brand" href="#top">
        SystemProfitLab
      </a>
      <nav aria-label="Primary navigation">
        <a href="#system">System</a>
        <a href="#automation">Automation</a>
        <a href="#start">Start</a>
      </nav>
    </header>
  );
}
