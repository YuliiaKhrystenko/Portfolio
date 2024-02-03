import React from "react";
import AdminDashboardMockup from "../public/AdminDashboardMockup.png"
import LandingMockup from "../public/LandingMockup.png"

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
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Version Control",
  "JavaScript",
  "TypeScript",
  "Vue JS",
  "Nuxt.js",
  "React Native",
  "Next.js",
  "Redux",
  "Node.js",
  "Express",
  "Tailwind",
  "Vuetify",
  "Firebase",
  "MongoDB",
  "SQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;

export const projectsData = [
  {
    title: "Admin Dashboard",
    description:
      "Build a MERN stack admin dashboard using",
    tags: ["React", "Redux", "Node JS", "Express", "MongoDB", "Material UI", "Nivo Charts"],
    imageUrl: AdminDashboardMockup,
    projectUrl: "https://admin-frontend-f1x0.onrender.com/"
  },
  {
    title: "Landing Page",
    description:
      "Build a stack admin dashboard",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    imageUrl: LandingMockup,
    projectUrl: "https://landing-page-a927f.web.app/"
  },
] as const;