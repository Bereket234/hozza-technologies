"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, ExternalLink, Loader2, CheckCircle2, Mail, MessageSquare } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(() => {
          onClose();
          setStatus("idle");
          setEmail("");
          setMessage("");
        }, 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-zinc-900/60 backdrop-blur-sm z-[100] cursor-pointer"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[110] px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden pointer-events-auto border border-zinc-100 flex flex-col md:flex-row h-auto min-h-[500px]"
            >
              {/* Left Panel - Branding/Info */}
              <div className="w-full md:w-2/5 bg-zinc-900 p-6 md:p-10 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex flex-col gap-2 mb-8">
                    <div className="h-10 w-20">
                       <img src="/Logo.png" alt="Hozza Logo" className="w-full h-full object-cover scale-[1.8] brightness-0 invert" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white/90">Hozza</span>
                  </div>
                  <h3 className="text-xl font-serif mb-3 leading-tight">Let's build <br/><span className="text-zinc-400 italic">together.</span></h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium uppercase tracking-widest">
                    We'll get back to you within 24 hours to discuss your project.
                  </p>
                </div>

                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                  style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} 
                />
              </div>

              {/* Right Panel - Form */}
              <div className="flex-1 p-6 md:p-10 relative flex flex-col">
                <button 
                  onClick={onClose}
                  className="absolute top-5 right-5 w-9 h-9 rounded-full bg-zinc-50 flex items-center justify-center hover:bg-zinc-100 transition-colors z-20"
                >
                  <X className="w-4 h-4 text-zinc-400" />
                </button>

                {status === "success" ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-center py-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center mb-6 shadow-xl shadow-zinc-200"
                    >
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    </motion.div>
                    <h4 className="text-xl font-serif text-zinc-900 mb-3">Message Received!</h4>
                    <p className="text-zinc-500 text-xs leading-relaxed max-w-[220px]">
                      We've received your request and will get back to you soon.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <h4 className="text-lg font-serif text-zinc-900 mb-1">Send a Message</h4>
                      <p className="text-xs text-zinc-400">Briefly describe your project goals.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
                      <div className="group">
                        <label className="block text-[9px] font-bold uppercase tracking-widest text-zinc-400 mb-1.5 ml-1 group-focus-within:text-zinc-900 transition-colors">
                          Your Email
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-300 group-focus-within:text-zinc-900 transition-colors" />
                          <input
                            required
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@company.com"
                            className="w-full pl-12 pr-5 py-3 rounded-xl bg-zinc-50/50 border border-zinc-100 focus:bg-white focus:border-zinc-900 focus:shadow-lg focus:shadow-zinc-200/40 transition-all duration-300 text-sm outline-none placeholder:text-zinc-300"
                          />
                        </div>
                      </div>

                      <div className="flex-1 flex flex-col min-h-[120px] group">
                        <label className="block text-[9px] font-bold uppercase tracking-widest text-zinc-400 mb-1.5 ml-1 group-focus-within:text-zinc-900 transition-colors">
                          How can we help?
                        </label>
                        <div className="relative flex-1 flex flex-col">
                          <MessageSquare className="absolute left-5 top-4 w-3.5 h-3.5 text-zinc-300 group-focus-within:text-zinc-900 transition-colors" />
                          <textarea
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Tell us about your product idea..."
                            className="w-full flex-1 pl-12 pr-5 py-3 rounded-xl bg-zinc-50/50 border border-zinc-100 focus:bg-white focus:border-zinc-900 focus:shadow-lg focus:shadow-zinc-200/40 transition-all duration-300 text-sm outline-none resize-none placeholder:text-zinc-300"
                          />
                        </div>
                      </div>

                      <div className="space-y-3 pt-2 mt-auto">
                        <button
                          disabled={status === "loading"}
                          type="submit"
                          className="w-full py-4 rounded-full bg-zinc-900 text-white font-bold text-sm uppercase tracking-wide hover:bg-zinc-800 transition-all flex items-center justify-center gap-2.5 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-zinc-200"
                        >
                          {status === "loading" ? (
                            <>
                              <Loader2 className="w-3.5 h-3.5 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send className="w-3.5 h-3.5" />
                            </>
                          )}
                        </button>

                        <div className="flex items-center gap-3 py-1 opacity-50">
                          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
                          <span className="text-[9px] font-bold text-zinc-300 uppercase tracking-widest">or</span>
                          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-zinc-200 to-transparent" />
                        </div>

                        <a 
                          href="https://www.upwork.com/agencies/1781231506231435264/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-full py-3.5 rounded-full border border-zinc-100 text-zinc-600 font-bold text-[10px] uppercase tracking-widest hover:bg-[#14a800]/5 hover:border-[#14a800]/20 hover:text-[#14a800] transition-all flex items-center justify-center gap-2.5 group"
                        >
                          <img src="/upwork-icon.png" alt="Upwork" className="w-3.5 h-3.5 object-contain grayscale group-hover:grayscale-0 transition-all duration-500" />
                          Visit our Upwork Profile
                          <ExternalLink className="w-3 h-3 text-zinc-300 group-hover:text-[#14a800] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </a>
                      </div>
                      
                      {status === "error" && (
                        <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest text-center mt-2">
                          Error sending message. Please try again.
                        </p>
                      )}
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
