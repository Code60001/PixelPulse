"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2, Phone, Mail, Sparkles } from "lucide-react";
import { ScallopedBadge } from "@/components/ui/ShapesAndBadges";

export function LetsTalkModal({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Web Development");
  const [budget, setBudget] = useState("$5,000 - $10,000");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3B001B]/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#F5F1E6] border-4 border-[#3B001B] rounded-2xl shadow-[10px_10px_0px_0px_#3B001B] p-6 sm:p-8 md:p-10 max-h-[90vh] overflow-y-auto">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#3B001B] text-white flex items-center justify-center hover:bg-[#F26C17] transition-colors z-20 shadow-md"
          aria-label="Close Modal"
        >
          <X size={20} strokeWidth={3} />
        </button>

        {submitted ? (
          <div className="text-center py-8 px-4 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#C1E1C1] border-2 border-[#3B001B] flex items-center justify-center text-[#3B001B] mb-6 shadow-md animate-bounce">
              <CheckCircle2 size={36} strokeWidth={2.5} />
            </div>
            <h3 className="text-3xl font-display uppercase text-[#3B001B] mb-3">
              YOU'RE ALL SET!
            </h3>
            <p className="font-sans text-sm font-semibold text-[#3B001B] opacity-90 max-w-md leading-relaxed mb-8">
              Thank you <span className="underline decoration-[#F26C17] decoration-2">{name || "there"}</span>! We've received your request for <span className="font-bold">{service}</span> and our strategy team will reach out within 2 hours.
            </p>

            <button
              onClick={handleReset}
              className="bg-[#F26C17] text-[#F5F1E6] font-sans font-bold uppercase text-xs tracking-widest px-8 py-3.5 border-2 border-[#3B001B] shadow-[4px_4px_0px_0px_#3B001B] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
            >
              Done & Close
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="relative mb-6">
              <div className="transform -rotate-6 inline-block mb-2">
                <ScallopedBadge text="LET'S TALK" fill="#F26C17" width={130} height={34} fontSize={10} />
              </div>
              <h3 className="text-3xl sm:text-4xl font-display uppercase text-[#3B001B] leading-none">
                BOOK A STRATEGY CALL
              </h3>
              <p className="font-sans text-xs sm:text-sm font-medium text-[#3B001B] opacity-80 mt-2">
                Tell us about your project goals and let's craft something amazing together.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 font-sans">
              <div>
                <label className="block text-xs font-bold uppercase text-[#3B001B] tracking-wider mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Johnson"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-white border-2 border-[#3B001B] rounded-md font-semibold text-xs text-[#3B001B] focus:outline-none focus:ring-2 focus:ring-[#869DFF]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-[#3B001B] tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-white border-2 border-[#3B001B] rounded-md font-semibold text-xs text-[#3B001B] focus:outline-none focus:ring-2 focus:ring-[#869DFF]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-[#3B001B] tracking-wider mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 bg-white border-2 border-[#3B001B] rounded-md font-semibold text-xs text-[#3B001B] focus:outline-none focus:ring-2 focus:ring-[#869DFF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-[#3B001B] tracking-wider mb-1">
                    Service Required
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 bg-white border-2 border-[#3B001B] rounded-md font-semibold text-xs text-[#3B001B] focus:outline-none focus:ring-2 focus:ring-[#869DFF]"
                  >
                    <option>Web Development</option>
                    <option>Brand Identity & Design</option>
                    <option>Social Media Marketing</option>
                    <option>SEO & Growth Strategy</option>
                    <option>Full Custom Solution</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-[#3B001B] tracking-wider mb-1">
                    Estimated Budget
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-4 py-3 bg-white border-2 border-[#3B001B] rounded-md font-semibold text-xs text-[#3B001B] focus:outline-none focus:ring-2 focus:ring-[#869DFF]"
                  >
                    <option>$1,000 - $5,000</option>
                    <option>$5,000 - $10,000</option>
                    <option>$10,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-[#3B001B] tracking-wider mb-1">
                  Project Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us a little bit about your project or timelines..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-white border-2 border-[#3B001B] rounded-md font-semibold text-xs text-[#3B001B] focus:outline-none focus:ring-2 focus:ring-[#869DFF]"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#3B001B] text-white font-sans font-bold uppercase text-xs tracking-widest flex items-center justify-center gap-2 rounded-md hover:bg-[#F26C17] transition-colors border-2 border-[#3B001B] shadow-[4px_4px_0px_0px_#3B001B] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
              >
                {isSubmitting ? (
                  <span>Sending Request...</span>
                ) : (
                  <>
                    <span>Submit & Book Call</span>
                    <Send size={14} strokeWidth={3} />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-4 pt-2 text-[10px] font-bold text-[#3B001B] uppercase tracking-wider opacity-80">
                <span className="flex items-center gap-1">
                  <Mail size={12} /> hello@pixelpulse.com
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Phone size={12} /> +1 (800) 555-FLOW
                </span>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
