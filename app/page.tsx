"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "./components/Button";
import Card from "./components/Card";
import Input from "./components/Input";
import Testimonial from "./components/Testimonial";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";

export default function ProfessionalLanding() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = async () => {
    if (!email) return;
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setSubmitted(true);
      setTimeout(() => {
        window.location.href = "https://YOUR-AFFILIATE-LINK.com";
      }, 1500);
    } catch (err) {
      console.error(err);
    }
  };

  const features = [
    { title: "Traffic Blueprint", desc: "Learn why people come: hooks, content strategy, viral ideas.", icon: "🚀" },
    { title: "Funnel System", desc: "Copy the exact high-converting funnel you see here.", icon: "🛠️" },
    { title: "HubSpot Setup", desc: "Where you capture, manage, and monetize your leads.", icon: "📈" },
  ];

  const testimonials = [
    { quote: "SystemProfitLab helped me double my leads in 2 weeks!", name: "Alex J." },
    { quote: "Finally a funnel system I can trust.", name: "Samantha R." },
    { quote: "This is exactly what I needed to automate growth.", name: "David K." },
  ];

  return (
    <div className="bg-black text-white font-sans">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 text-center px-6 bg-gradient-to-r from-indigo-900 via-purple-900 to-black overflow-hidden">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Turn <span className="text-indigo-400">Attention</span> into <span className="text-purple-400">Automated Income</span>
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Build a full-stack system to capture traffic, automate follow-ups, and scale profits.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-indigo-500 hover:bg-indigo-600 px-8 py-4 rounded-3xl shadow-lg" onClick={() => setModalOpen(true)}>
            Get Your Free System
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">What You Get</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="text-center">
              <Card>
                <div className="text-5xl mb-4">{f.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{f.title}</h3>
                <p className="text-gray-400">{f.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Email Capture Modal */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-3xl font-bold mb-4">Get The System + HubSpot Setup</h2>
        {submitted ? (
          <p className="text-green-400 text-xl">Redirecting you...</p>
        ) : (
          <>
            <Input placeholder="Enter your email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className="mb-4" />
            <Button className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-3xl w-full" onClick={handleSubmit}>
              Get Instant Access
            </Button>
          </>
        )}
        <p className="text-gray-400 mt-2 text-sm">✅ We never spam — instant access only</p>
      </Modal>

      {/* Testimonials */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Testimonial key={i} quote={t.quote} name={t.name} />
          ))}
        </div>
      </section>

      {/* About / Purpose */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Our Full Purpose</h2>
        <p className="text-gray-300 text-lg mb-4">
          SystemProfitLab helps creators turn attention into automated income. Full stack: Traffic → Funnel → HubSpot.
        </p>
        <ul className="list-disc list-inside text-gray-400 text-left max-w-xl mx-auto space-y-2">
          <li><strong>Traffic Blueprint:</strong> Generate consistent attention.</li>
          <li><strong>Funnel System:</strong> Copy exact flows that convert.</li>
          <li><strong>HubSpot Setup:</strong> Automate leads and revenue tracking.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-gradient-to-r from-purple-900 via-indigo-900 to-black">
        <h2 className="text-4xl font-bold mb-6">Start Building Your System Today</h2>
        <Button className="bg-indigo-500 hover:bg-indigo-600 px-8 py-4 text-lg rounded-3xl shadow-lg" onClick={() => setModalOpen(true)}>
          Get Instant Access
        </Button>
      </section>

      {/* Legal Footer */}
      <footer className="text-center py-10 bg-gray-900 text-gray-400 text-sm space-y-2">
        <p>© 2026 SystemProfitLab. All rights reserved.</p>
        <p><a href="#" className="hover:text-indigo-400">Privacy Policy</a> | <a href="#" className="hover:text-indigo-400">Terms of Service</a> | <a href="#" className="hover:text-indigo-400">Disclaimer</a></p>
        <p>All results are illustrative. Individual results may vary. SystemProfitLab is educational; not financial advice.</p>
      </footer>
    </div>
  );
}