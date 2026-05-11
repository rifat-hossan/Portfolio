"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import { FaLinkedinIn, FaGithub, FaBehance, FaDribbble } from "react-icons/fa";

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
              <h3 className="text-gray-300 text-xl font-medium tracking-wide">
                Hello, It's Me
              </h3>
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                MD Rifat
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-300 font-medium pt-2 w-[50%]">
                UI/UX Designer crafting intuitive and impactful digital
                experiences for web and mobile products
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
                href="https://drive.google.com/file/d/1W0YsmcOjjSDcd84Xq_min637Hl9oXAmo/view?usp=sharing"
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
          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] flex items-center justify-center"
          >
            {/* Outer Glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-3xl"></div>

            {/* Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-full h-full rounded-full border border-cyan-400/30"
            >
              {/* Orbit Dot */}
              <div className="absolute top-[-8] left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.9)]"></div>
            </motion.div>

            {/* Second Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[85%] h-[85%] rounded-full border border-cyan-300/20"
            >
              <div className="absolute top-[-6] left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_rgba(0,229,255,0.8)]"></div>
            </motion.div>

            {/* Image Container */}
            <div className="relative w-[78%] h-[78%] rounded-full overflow-hidden border-4 border-cyan-400/40 shadow-[0_0_40px_rgba(34,211,238,0.25)] bg-[#0f172a]">
              <img
                src="https://www.figma.com/api/mcp/asset/ed4d3bcd-d925-4ad6-be13-849ab9d9ddfd"
                alt="MD Rifat"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Small Floating Blur */}
            <div className="absolute -right-6 top-10 w-20 h-20 bg-cyan-400/20 blur-2xl rounded-full"></div>
            <div className="absolute -left-8 bottom-8 w-24 h-24 bg-primary/20 blur-3xl rounded-full"></div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}