"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Container from "./Container";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
];

const navLinksRight = [
  { name: "Skills", href: "#skills" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <Container>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: [0.25, 1, 0.5, 1]
        }}
        className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-[85%]"
      >
        <div className="bg-[#111216]/80 backdrop-blur-md border border-gray-800 rounded-full py-3 px-8 flex items-center justify-between shadow-2xl">
          <ul className="flex items-center space-x-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setActive(link.name)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${active === link.name
                    ? "text-black"
                    : "text-gray-300 hover:text-white"
                    }`}
                >
                  {active === link.name && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary rounded-full -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Logo */}
          {/* <Link href="#home" onClick={() => setActive("Home")}>
            <div className="w-18 h-18 bg-primary rounded-full flex items-center justify-center font-black italic text-black text-xl tracking-tighter cursor-pointer hover:scale-105 transition-transform shadow-[0_0_15px_rgba(0,229,255,0.4)]">
              RH
            </div>
          </Link> */}

          <Link href="#home" onClick={() => setActive("Home")}>
            <div className="size-14 rounded-full bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.4)] hover:scale-105 transition-transform cursor-pointer">

              <span className="text-black text-xl font-black italic leading-none translate-y-[-1px] translate-x-[-3px]">
                RH
              </span>

            </div>
          </Link>

          <ul className="flex items-center space-x-10">
            {navLinksRight.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setActive(link.name)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${active === link.name
                    ? "text-black"
                    : "text-gray-300 hover:text-white"
                    }`}
                >
                  {active === link.name && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary rounded-full -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>
    </Container>
  );
}
