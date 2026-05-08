"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Container from "./Container";

export default function Contact() {
  return (
    <section id="contact" className="pt-24 bg-background relative overflow-hidden">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4"
          >
            Get In Touch
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            Let's Build Something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
              Amazing Together
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>

              <div className="space-y-6">
                {[
                  { icon: <Mail size={20} />, label: "Email", value: "mdrifathossan656@gmail.com" },
                  { icon: <Phone size={20} />, label: "Phone", value: "+88 01960679587" },
                  { icon: <MapPin size={20} />, label: "Location", value: "Dhaka, Bangladesh" }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-5 p-5 bg-[#1A1C23] rounded-2xl border border-white/5 hover:border-primary transition-colors group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform cursor-pointer">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-1">{item.label}</p>
                      <p className="text-sm md:text-base font-medium text-white">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className=" relative p-8 rounded-2xl border border-primary/10 bg-[linear-gradient(180deg,_rgba(0,184,219,0.10)_10%,_rgba(0,0,0,0)_100%)]"
            >
              <p className="text-gray-300 leading-relaxed italic text-sm md:text-base">
                " Great collaboration starts with great communication. I'm always excited to hear about new projects and opportunities."
              </p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-[#1A1C23] border border-white/5 rounded-xl p-4 text-white focus:outline-none focus:border-primary transition-colors cursor-pointer"
                />
              </div>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-[#1A1C23] border border-white/5 rounded-xl p-4 text-white focus:outline-none focus:border-primary transition-colors cursor-pointer"
                />
              </div>
              <div className="md:col-span-2">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-[#1A1C23] border border-white/5 rounded-xl p-4 text-white focus:outline-none focus:border-primary transition-colors cursor-pointer"
                />
              </div>
              <div className="md:col-span-2">
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full bg-[#1A1C23] border border-white/5 rounded-xl p-4 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button
                  className="w-full bg-primary hover:bg-cyan-400 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] cursor-pointer"
                >
                  Send Message <Send size={18} />
                </button>
              </div>
            </motion.form>
          </div>
        </div>


      </Container>
    </section>
  );
}
