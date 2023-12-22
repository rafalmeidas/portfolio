import styled from "styled-components";

import ProjectCard from "./ProjectCard";
import Subtitle from "./Subtitle";
import Title from "./Title";
import { useTranslation } from "react-i18next";

const TagSection = styled.section`
  margin: 1.5rem 0 2rem 0;
  line-height: 150%;

  > div {
    margin-top: 1.5rem;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 50px;
    align-items: center;
    justify-items: center;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    margin: 1.5rem 0 3rem 0;

    > div {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 1024px) {
    margin: 1.5rem 0 4rem 0;

    > div {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: "Search d_evs",
      description: t("search-devs-description", { ns: ["projects"] }),
      previewLink: "https://github.com/rafalmeidas/search-d_evs",
      codeLink: "https://github.com/rafalmeidas/search-d_evs",
      techStack:
        "html, sass, react, react-router-dom, typescript, axios, date-fns, jest",
    },
    {
      title: "marvel-v1",
      description: t("marvel-description", { ns: ["projects"] }),
      previewLink: "https://github.com/rafalmeidas/marvel-v1",
      codeLink: "https://github.com/rafalmeidas/marvel-v1",
      techStack: "html, sass, react, react-router-dom, typescript, jest",
    },
  ];

  return (
    <TagSection>
      <Title>{t("title", { ns: ["projects"] })}</Title>
      <Subtitle>{t("subtitle", { ns: ["projects"] })}</Subtitle>

      <div>
        {projects.map(
          ({ title, description, techStack, codeLink, previewLink }, index) => (
            <ProjectCard
              key={`${title}-${index}`}
              title={title}
              description={description}
              // src=""
              techStack={techStack}
              codeLink={codeLink}
              previewLink={previewLink}
            />
          ),
        )}
      </div>
    </TagSection>
  );
}

export default Projects;
