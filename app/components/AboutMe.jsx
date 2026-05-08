"use client";

import { motion } from "framer-motion";
import { Code2, Award, Palette, Zap } from "lucide-react";
import Container from "./Container";

const stats = [
  {
    icon: <Code2 className="text-primary mb-3" size={24} />,
    value: "50+",
    label: "Projects Completed",
  },
  {
    icon: <Award className="text-primary mb-3" size={24} />,
    value: "1+",
    label: "Years Experience",
  },
  {
    icon: <Palette className="text-primary mb-3" size={24} />,
    value: "30+",
    label: "Happy Clients",
  },
  {
    icon: <Zap className="text-primary mb-3" size={24} />,
    value: "100%",
    label: "Client Satisfaction",
  },
];

export default function AboutMe() {
  return (
    <section id="about" className="py-20">
      <Container>
        <div className="flex flex-col lg:flex-row gap-8 md:gap-20 lg:gap-35 items-center">

          {/* Left Side: Image & Stats */}
          <div className="flex-1 w-full max-w-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mb-8 pt-5 pl-5"
            >
              {/* Top-left decorative cyan outline */}
              <svg
                className="absolute top-0 left-0 w-28 h-28 text-primary z-0"
                viewBox="0 0 100 100"
                fill="none"
                style={{ filter: 'drop-shadow(0px 0px 6px rgba(0, 229, 255, 0.4))' }}
              >
                <path
                  d="M 100 4 L 32 4 C 16.5 4 4 16.5 4 32 L 4 100"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>




              <div className="relative">
                <img
                  src="/logo.png"
                  alt="About MD Rifat"
                  className="w-full h-full object-cover "
                />
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#1A1C23] p-6 rounded-2xl border border-gray-600 hover:border-cyan-500 transition-all duration-300 cursor-pointer"
                >
                  {stat.icon}
                  <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-xs text-gray-400 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Text */}
          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-primary text-sm font-bold tracking-widest uppercase mb-4">About Me</h4>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Crafting Digital <br className="hidden md:block" />
                <span className="text-primary">Experiences</span>
              </h2>

              <div className="space-y-6 text-gray-300 leading-relaxed text-sm md:text-base">
                <p>
                  I'm a passionate UI/UX Designer with a strong interest in creating intuitive and user-centered digital experiences. My journey in design started with curiosity about how users interact with products, and since then I've been continuously learning and improving my design skills.
                </p>
                <p>
                  I specialize in <span className="font-bold text-cyan-400">

                    designing clean, modern, and responsive interfaces
                  </span> using tools like    <span className="font-bold text-cyan-400">

                    Figma
                  </span>
                   . My approach focuses on understanding user needs, simplifying complex ideas, and transforming them into meaningful and visually engaging experiences.
                </p>
                <p>
                  When I'm not designing, I enjoy exploring <span className="font-bold text-cyan-400">
                    new design trends, improving my skills, and working on creative projects
                  </span> that help me grow as a designer.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}
