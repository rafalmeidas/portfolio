import { initReactI18next } from "react-i18next";
import i18next, { Resource } from "i18next";

import ptProfileHeader from "./translations/portuguese/profile-header.json";
import enProfileHeader from "./translations/english/profile-header.json";

import ptLanguage from "./translations/portuguese/languages.json";
import enLanguage from "./translations/english/languages.json";

import ptMenu from "./translations/portuguese/menu.json";
import enMenu from "./translations/english/menu.json";

import ptTechStack from "./translations/portuguese/tech-stack.json";
import enTechStack from "./translations/english/tech-stack.json";

import ptProjects from "./translations/portuguese/projects.json";
import enProjects from "./translations/english/projects.json";

import ptProjectCard from "./translations/portuguese/project-card.json";
import enProjectCard from "./translations/english/project-card.json";

import ptExperienceCard from "./translations/portuguese/experience-card.json";
import enExperienceCard from "./translations/english/experience-card.json";

import ptAbout from "./translations/portuguese/about.json";
import enAbout from "./translations/english/about.json";

const resources: Resource = {
  pt: {
    profileHeader: ptProfileHeader,
    language: ptLanguage,
    menu: ptMenu,
    techStack: ptTechStack,
    projects: ptProjects,
    projectCard: ptProjectCard,
    experienceCard: ptExperienceCard,
    about: ptAbout,
  },
  en: {
    profileHeader: enProfileHeader,
    language: enLanguage,
    menu: enMenu,
    techStack: enTechStack,
    projects: enProjects,
    projectCard: enProjectCard,
    experienceCard: enExperienceCard,
    about: enAbout,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "pt",
});

export default i18next;
