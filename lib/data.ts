import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import hmsImg from "@/public/hms.png";
import shoppingImg from "@/public/shopping.png";
import pizzaImg from "@/public/pizza.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "BSc IT Undergraduate",
    location: "University of Sri Jayewardenepura, Sri Lanka",
    description:
      "As an undergraduate, I’m gaining hands-on experience in software engineering through projects and coursework. This allows me to apply my skills in programming, data structures, and problem-solving to real-world applications, preparing me for a career in software engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - present",
  },
  
  
] as const;

export const projectsData = [
  {
    title: "Hospital Management System",
    description:
      "This is the group project of the Hospital Management System is an OOP-based software solution that efficiently manages, organized and aoutomate hospital operations.",
    tags: ["OOP", "SQL"],
    imageUrl: hmsImg,
  },
  {
    title: "Shopping Website",
    description:
      "This project is an online shopping website with a homepage featuring the product catalogue, collection, and customer reviews sections, as well as a login page for signing up and ordering products.",
    tags: ["HTML","css","JS","Boxicons"],
    imageUrl: shoppingImg,
  },
  {
    title: "Pizza Paradise",
    description:
      "This PizzaParadise project is an online pizza ordering website with a homepage featuring the menu, about, and customer comments, as well as a login page for signing up and ordering pizza. ",
    tags: ["HTML","css","JS","Boxicons"],
    imageUrl: pizzaImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "PostgreSQL",
  "Python",
  "Java",
  "Data Structures and Algorithms",
  "SQL",
  "OOP",
  "Version Control Systems",
  "Testing and Debugging",
  

  
] as const;
