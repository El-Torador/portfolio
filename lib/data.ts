import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import surferLight from "@/public/Surfer-light.png";
import demineurLight from "@/public/Demineur-light.png";
import community from "@/public/community.png";

export const EMAIL = 'kagmeni77@gmail.com'

export const links = [
  {
    name: "Home",
    fr: "Accueil",
    hash: "#home",
  },
  {
    name: "About",
    fr: "À Propos",
    hash: "#about",
  },
  {
    name: "Projects",
    fr: "Projets",
    hash: "#projects",
  },
  {
    name: "Skills",
    fr: "Compétences",
    hash: "#skills",
  },
  {
    name: "Experience",
    fr: "Expériences",
    hash: "#experience",
  },
  {
    name: "Contact",
    fr: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "bcs",
    location: "Yaounde, Cameroon",
    tags: ["SQL SERVER", "Oracle", "Neo4J", "C/C++", "Java", "Arduino", "Electronique", "CCNA"],
    icon: React.createElement(LuGraduationCap),
    date: "diai",
    company: "Institut Africain Informatique",
    slug: "iai"
  },
  {
    title: "pm",
    location: "Yaounde, Cameroon",
    tags: ["React.js", "Redux", "Electron", "Jest", "Ant Design", "Python", "Django", "PostgreSQL", "Git", "CI/CD", "Codacy", "Docker", "Trello"],
    icon: React.createElement(CgWorkAlt),
    date: "dpm",
    company: "GMC Assurance",
    slug: "gmc"
  },
  {
    title: "bcs",
    location: "Ivry-sur-seine, France",
    tags: ["Spring Boot", "Storytelling", "Stage"],
    icon: React.createElement(LuGraduationCap),
    date: "desiea",
    company: "ESIEA",
    slug: "esiea"
  },
  {
    title: "fsdi",
    location: "Issy-les-moulineaux, France",
    tags: ["React.js", "Next.js", "Python", "Flask", "AWS Cloud", "Power Automate", "Cloud Computing", "API REST", "Planner"],
    icon: React.createElement(CgWorkAlt),
    date: "dfsdi",
    company: "Azatys",
    slug: "intership"
  },
  {
    title: "fsd",
    location: "Issy-les-moulineaux, France",
    tags: ["React.js", "React-Native", "Redux", "Next.js", "Python", "Flask", "API REST", "Amplify", "AWS Lambda", "Stripe API", "Docker", "CI/CD", "ECS/ECR", "DynamoDB", "S3", "EC2", "Power Automate", "Tracking GA4", "Shopify", "Web Scrapping", "Data-Structure"],
    icon: React.createElement(FaReact),
    date: "dfsd",
    company: "Azatys",
    slug: "alternance"
  },
  {
    title: "ese",
    location: "Ivry-sur-seine, France",
    tags: ["Compilateur", "Gestion de projet", "OWASP", "Data-Structure", "Rust", "Babylone.js", "Web 3", "Programmation Mobile"],
    icon: React.createElement(LuGraduationCap),
    date: "dese",
    company: "ESIEA",
    slug: "expert"
  },
] as const;

export const projectsData = [
  {
    title: "Surfer",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "Recoil JS", "Tailwind CSS", "Adonis JS", "Neo4J", "Docker", "Gitlab CI", "Jest", "Figma", "Trello"],
    imageUrl: surferLight,
    link: "https://gitlab.com/Torador/surfer",
    slug: "surfer"
  },
  {
    title: "Demineur",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["JavaScript", "HTML", "CSS", "Algorithmique"],
    imageUrl: demineurLight,
    link: "https://demineur-game-torador.web.app",
    slug: "demineur"
  },
  {
    title: "Torador Community",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Angular", "Express.js", "RxJS", "Ant Design", "ArangoDB"],
    imageUrl: community,
    link: "https://torador-community.vercel.app",
    slug: "community"
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "React Native",
  "Redux",
  "Next.js",
  "Node.js",
  "Electron",
  "Tailwind CSS",
  "Adonis JS",
  "Nest JS",
  "Angular",
  "AWS Cloud",
  "Express.js",
  "Python",
  "Flask",
  "MongoDB",
  "GraphQL",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
  "Git"
] as const;
