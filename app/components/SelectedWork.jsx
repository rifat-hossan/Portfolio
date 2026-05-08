"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Container from "./Container";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import image1 from "../images/image1.jpeg";
import image2 from "../images/image2.jpeg"
import image3 from "../images/image3.jpeg"
import image4 from "../images/image4.jpeg"
import { link } from "framer-motion/client";

const projects = [
  {
    id: 1,
    title: "Case Study (School management System)",
    image: image1,
    link: "https://dribbble.com/shots/26952159-School-Management-System-APP-Case-Study"
  },
  {
    id: 2,
    title: "Booking System (AI Chatbot)",
    image: image2,
    link: "https://dribbble.com/shots/27327275-AI-Booking-System-Landing-Page-Design"
  },
  {
    id: 3,
    title: "Sales & Engagement (AI Chatbot)",
    image: image3,
    link: "https://dribbble.com/shots/27327341-AI-CRM-Dashboard-Chat-Leads-Agent-Management-UI"

  },
  {
    id: 4,
    title: "Cryptocurrency Landing Page",
    image: image4,
    link: "https://dribbble.com/shots/26951842-Modern-cryptocurrency-landing-page-designed"
  },
  // {
  //   id: 5,
  //   title: "Mobile App",
  //   image:
  //     "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  //   link: "https://dribbble.com/shots/26951842-Modern-cryptocurrency-landing-page-designed"
  // },
  // {
  //   id: 6,
  //   title: "Mobile App",
  //   image:
  //     "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  //   link: "https://dribbble.com/shots/26951842-Modern-cryptocurrency-landing-page-designed"
  // },
  // {
  //   id: 7,
  //   title: "Mobile App",
  //   image:
  //     "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  //   link: "https://dribbble.com/shots/26951842-Modern-cryptocurrency-landing-page-designed"
  // },
];

export default function SelectedWork() {
  return (
    <section id="portfolio" className="py-12 md:py-20">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-0 mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">
              Portfolio
            </h4>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Selected Work
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="https://dribbble.com/rifat4656"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-white transition-colors flex items-center gap-1 text-sm font-medium"
            >
              View All Projects <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full"
        >
          <Swiper
            modules={[Pagination]}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-custom-bullet",
              bulletActiveClass: "swiper-custom-bullet-active",
            }}
            className="pb-20"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.id}>
                <div className="bg-[#686868]/20 rounded-[32px] py-6 pb-0 border border-gray-800/50 flex flex-col h-[380px] sm:h-[420px] lg:h-[480px] group cursor-pointer mt-8 md:mt-10">
                  <h3 className="text-2xl font-bold text-white mb-5 px-6">
                    {project.title}
                  </h3>

                  <div className="w-full h-[1px] bg-gray-800 mb-6" />

                  <div className="relative flex-1 w-full mt-4">
                    {/* Stack layers */}
                    <div className="absolute top-[-32px] left-8 right-8 h-12 bg-[#2A2A2A] rounded-t-[24px] z-10 border-t border-x border-gray-700/30 transition-transform duration-500 group-hover:-translate-y-2" />
                    <div className="absolute top-[-16px] left-4 right-4 h-12 bg-[#3A3A3A] rounded-t-[24px] z-20 border-t border-x border-gray-600/30 transition-transform duration-500 group-hover:-translate-y-1" />

                    {/* Main image container */}
                    <div className="absolute inset-0 bg-[#E5D5C5] rounded-[24px] z-30 overflow-hidden flex items-end justify-center transition-transform duration-500 group-hover:-translate-y-1">
                      <img
                        src={
                          typeof project.image === "string"
                            ? project.image
                            : project.image.src
                        }
                        alt={project.title}
                        className="w-full h-full object-cover rounded-t-2xl shadow-2xl group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    {/* Bottom Right Cutout for Button */}
                    <div className="absolute bottom-[-1px] right-[-1px] w-[96px] h-[96px] bg-[#0F0F12] rounded-tl-[48px] z-40 flex items-center justify-center transition-transform duration-500 ">
                      {/* Top Inverted Corner */}
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-full right-0 text-[#0F0F12]">
                        <path d="M 0 24 C 10 24 24 24 24 0 L 24 24 Z" fill="currentColor" />
                      </svg>

                      {/* Left Inverted Corner */}
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-full bottom-0 text-[#0F0F12]">
                        <path d="M 0 24 C 0 24 
                        24 25 24 0 L 24 24 Z" fill="currentColor" />
                      </svg>

                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[72px] h-[72px] bg-[#161D29] group-hover:bg-primary group-hover:text-black transition-colors rounded-full flex items-center justify-center text-white"
                      >
                        <ArrowUpRight size={55} />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </Container>
    </section>
  );
}
