"use client";

import { motion } from "framer-motion";
import { Palette, PenTool, Search, Layers, CheckCircle, Sparkles } from "lucide-react";
import Container from "./Container";

const skillsData = [
  {
    id: "ui-ux",
    title: "UI/UX Design",
    icon: <Palette size={20} />,
    color: "cyan",
    items: [
      { name: "User Interface Design", icon: <CheckCircle size={16} className="text-cyan-500" /> },
      { name: "User Experience Design", icon: <CheckCircle size={16} className="text-cyan-500" /> },
      { name: "Wireframing", icon: <CheckCircle size={16} className="text-cyan-500" /> },
    ],
  },
  {
    id: "tools",
    title: "Design Tools",
    icon: <PenTool size={20} />,
    color: "pink",
    items: [
      { name: "Figma", icon: <Sparkles size={14} className="text-pink-400" /> },
      { name: "FigJam", icon: <Sparkles size={14} className="text-pink-400" /> },
      { name: "Adobe XD", icon: <Sparkles size={14} className="text-pink-400" /> },
    ],
    isHorizontal: true, // Specific styling for this card based on the screenshot
  },
  {
    id: "research",
    title: "UX Research",
    icon: <Search size={20} />,
    color: "green",
    items: [
      { name: "User Research" },
      { name: "User Flow" },
      { name: "Usability Testing" },
    ],
    itemBorderLeft: true, // Specific styling
  },
  {
    id: "prototyping",
    title: "Prototyping",
    icon: <Layers size={20} />,
    color: "orange",
    items: [
      { name: "Interactive Prototype" },
      { name: "Interactive Prototype" },
      { name: "Interactive Prototype" },
    ],
    numbered: true, // Specific styling
  },
];

// Helper to map color names to tailwind classes
const colorMap = {
  cyan: {
    bg: "bg-[linear-gradient(180deg,_rgba(0,184,219,0.10)_10%,_rgba(0,0,0,0)_100%)]",
    text: "text-cyan-500",
    border: "border-cyan-500/30",
    cardHover: "hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]",
    iconBg: "bg-cyan-500",
    itemBg: "bg-gray-800/50",
    itemBorder: "border-gray-700",
  },
  pink: {
    bg: "bg-[linear-gradient(180deg,_rgba(246,51,154,0.10)_10%,_rgba(0,0,0,0)_100%)]",
    text: "text-pink-500",
    border: "border-pink-500/30",
    cardHover: "hover:border-pink-500/50 hover:shadow-[0_0_20px_rgba(236,72,153,0.15)]",
    iconBg: "bg-pink-500",
    itemBg: "bg-pink-950/30",
    itemBorder: "border-pink-900/50",
  },
  green: {
    bg: "bg-[linear-gradient(180deg,_rgba(0,188,125,0.10)_10%,_rgba(0,0,0,0)_100%)]",
    text: "text-emerald-500",
    border: "border-emerald-500/30",
    cardHover: "hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]",
    iconBg: "bg-emerald-500",
    itemBg: "bg--800/50",
    itemBorder: "border-gray-700",
    leftBorderColor: "border-l-emerald-500",
  },
  orange: {
    bg: "bg-[linear-gradient(180deg,_rgba(255,105,0,0.10)_10%,_rgba(0,0,0,0)_100%)]",
    text: "text-orange-500",
    border: "border-orange-500/30",
    cardHover: "hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]",
    iconBg: "bg-orange-500",
    itemBg: "bg-gray-800/50",
    itemBorder: "border-gray-700",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-2">
      <Container>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-primary text-sm font-bold tracking-widest uppercase mb-4">My Skills</h4>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              What I Bring to <span className="text-primary">The Table</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-xl">
              A comprehensive skill set covering modern web development, from
              pixel-perfect UIs to robust backend systems
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((category, index) => {
            const colors = colorMap[category.color];

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${colors.bg} rounded-3xl p-8 border ${colors.border} transition-all duration-300 ${colors.cardHover}`}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 rounded-2xl ${colors.iconBg} flex items-center justify-center text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>

                {category.isHorizontal ? (
                  <div className="flex flex-wrap gap-3">
                    {category.items.map((item, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full border ${colors.itemBorder} ${colors.itemBg}`}
                      >
                        {item.icon}
                        <span className="text-gray-300 text-sm font-medium">{item.name}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-3">
                    {category.items.map((item, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center gap-3 px-5 py-3 rounded-xl border ${colors.itemBorder} ${colors.itemBg} ${category.itemBorderLeft ? `border-l-4 ${colors.leftBorderColor}` : ''}`}
                      >
                        {item.icon && item.icon}
                        {category.numbered && (
                          <div className={`w-8 h-8 rounded-[8px] flex items-center justify-center text-xs font-bold text-white bg-orange-400`}>
                            {idx + 1}
                          </div>
                        )}
                        <span className="text-gray-300 text-sm font-medium">{item.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
