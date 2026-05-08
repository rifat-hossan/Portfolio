"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import {
  FaLinkedinIn,
  FaGithub,
  FaBehance,
  FaDribbble,
} from "react-icons/fa";



export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-8">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 lg:gap-8">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 space-y-6 relative z-10"
          >
            {/* Background Glow */}
            <div className="absolute top-1/4 -left-10 w-70 h-80 bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

            <div className="space-y-2">
              <h3 className="text-gray-300 text-xl font-medium tracking-wide">Hello, It's Me</h3>
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                MD Rifat
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-300 font-medium pt-2 w-[50%]">
                UI/UX Designer crafting intuitive and impactful digital experiences for web and mobile products
              </h2>
            </div>
            <div className="flex space-x-4 pt-4">
              {[
                {
                  Icon: FaLinkedinIn,
                  href: "https://www.linkedin.com/in/rifat656",
                },
                {
                  Icon: FaBehance,
                  href: "https://www.behance.net/mdrifat381",
                },
                {
                  Icon: FaDribbble,
                  href: "https://dribbble.com/rifat4656",
                },
                // {
                //   Icon: FaGithub,
                //   href: "https://github.com/rifat-hossan",
                // },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-colors shadow-[0_0_10px_rgba(0,229,255,0.2)] hover:shadow-[0_0_15px_rgba(0,229,255,0.5)]"
                >
                  <social.Icon size={18} />
                </motion.a>
              ))}
            </div>

            <div className="pt-6">
              <motion.a
                href="https://drive.google.com/file/d/1Cg-Y6CozX9hQTZa34RtRjDpEbKc8JJwV/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex bg-primary text-black font-semibold px-8 py-3 rounded-full hover:bg-cyan-300 transition-colors shadow-[0_0_15px_rgba(0,229,255,0.3)] cursor-pointer"
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Right Image */}
          <div className="relative w-[420px] h-[420px] flex-shrink-0 animate-float">
            {/* Rotating border */}
            <div className="absolute inset-0 rounded-[32px] border-3 border-cyan-500 rotate-6" />
            {/* Main image container */}
            <div className="absolute inset-0 rounded-[32px] border border-[#22d3ee] overflow-hidden shadow-[13px_0px_4px_0px_rgba(0,0,0,0.25)]">
              <img
                src="https://www.figma.com/api/mcp/asset/ed4d3bcd-d925-4ad6-be13-849ab9d9ddfd"
                alt="MD Rifat"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Glow */}
            <div className="absolute -inset-4 rounded-[40px] bg-[rgba(0,211,243,0.05)] blur-xl -z-10" />
          </div>
        </div>
      </Container>
    </section>
  );
}
