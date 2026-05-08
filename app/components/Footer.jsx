

"use client";

import Link from "next/link";
import Container from "./Container";

const socialLinks = [
  {
    name: "LINKEDIN",
    href: "https://www.linkedin.com/in/rifat656",
  },
  {
    name: "BEHANCE",
    href: "https://www.behance.net/mdrifat381",
  },
  {
    name: "DRIBBBLE",
    href: "https://dribbble.com/rifat4656",
  },
  // {
  //   name: "GITHUB",
  //   href: "https://github.com/rifat-hossan",
  // },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-12 mt-12">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-center md:text-left">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-black font-extrabold text-lg shadow-[0_0_15px_rgba(0,229,255,0.4)]">
              RH
            </div>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm order-3 md:order-2">
            © {new Date().getFullYear()} Md Rifat | Designed by Me
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 order-2 md:order-3">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-gray-400 hover:text-primary transition-colors tracking-widest"
              >
                {social.name}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
