import styled from "styled-components";

import ProjectCard from "../components/ProjectCard";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";

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

const projects = [
  {
    title: "Search d_evs",
    description:
      "O 'Search d_evs' é uma aplicação prática e funcional que demonstra habilidades de desenvolvimento front-end, incluindo a integração com a API do GitHub e a criação de interfaces de usuário intuitivas e responsivas. O aplicativo visa proporcionar uma experiência simples e eficaz para os usuários que desejam explorar e se conectar com a comunidade de desenvolvedores do GitHub.",
    previewLink: "https://github.com/rafalmeidas/search-d_evs",
    codeLink: "https://github.com/rafalmeidas/search-d_evs",
    techStack: "html, sass, react, typescript, axios, date-fns, jest",
  },
  {
    title: "marvel-v1",
    description:
      "O 'marvel-v1' é uma aplicação prática e funcional que demonstra habilidades de desenvolvimento front-end, incluindo a integração com a API da Marvel e a criação de interfaces de usuário intuitivas e responsivas. O aplicativo visa proporcionar uma experiência simples e eficaz para os usuários que desejam explorar os personagens do universo Marvel.",
    previewLink: "https://github.com/rafalmeidas/marvel-v1",
    codeLink: "https://github.com/rafalmeidas/marvel-v1",
    techStack: "html, sass, react, typescript, jest",
  },
];

function Projects() {
  return (
    <TagSection>
      <Title>Projects</Title>
      <Subtitle>Things I’ve built so far</Subtitle>

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
