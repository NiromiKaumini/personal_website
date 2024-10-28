"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I am currently pursuing a BSc in Information Technology, focusing on 
      <span className="bold"> Software Engineering.</span> 
      Throughout my studies, I have gained expertise in technologies like React and Next.js, 
      developing projects that address real-world challenges through innovative software solutions.
       I’m passionate about using technology to solve complex problems and am dedicated to enhancing 
       my development skills through hands-on projects and freelance work. My goal after graduation 
       is to pursue a career in software engineering, where I can continue to create impactful and 
       efficient applications.</p>

       <p>In my free time, I enjoy exploring new programming languages, contributing to open-source projects, 
        and staying updated with the latest tech trends. I also value work-life balance and spend time reading
         tech blogs, playing strategy games, and practicing mindfulness.
      
      </p>

      <p>
        <span className="bold">In my free time</span>, I enjoy reading, watching movies, and practicing yoga . 
        I am also enthusiastic{" "}
        <span className="font-medium">about learning new things </span> and am currently exploring {" "}
        <span className="font-medium">psychology and counselling</span>. 
      </p>
    </motion.section>
  );
}
