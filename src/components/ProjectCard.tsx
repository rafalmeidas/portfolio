import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import GitHubIcon from "./icons/GitHubIcon";
import ChainIcon from "./icons/ChainIcon";

import background from "../assets/default.webp";
import { ToIcon } from "../utils/toIcon";

interface ProjectCardProps {
  title: string;
  src?: string;
  description: string;
  previewLink: string;
  codeLink: string;
  techStack: string;
}

const TagDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  border-radius: 20px;
  background-color: var(--bg-card-dark);

  @media screen and (max-width: 1300px) {
    > div {
      p {
        -webkit-line-clamp: 3;
      }
    }
  }

  @media screen and (max-width: 768px) {
    > div {
      p {
        -webkit-line-clamp: 2;
      }
    }
  }
`;

const TagDivHeader = styled.div`
  width: 100%;

  img {
    width: 100%;
    object-fit: cover;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
  }

  > div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 15px;
    color: var(--text-dark);

    p {
      text-align: justify;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    > div {
      padding: 18px;

      p {
        -webkit-line-clamp: 3;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    > div {
      padding: 22px;

      p {
        -webkit-line-clamp: 5;
      }
    }
  }
`;

const TagDivFooter = styled.div`
  padding: 0 22px 22px 22px;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;

  p {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;

    svg {
      width: 30px;
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    display: flex;
    align-items: center;
    color: inherit;
    gap: 5px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

function ProjectCard({
  title,
  src = background,
  description,
  previewLink,
  codeLink,
  techStack,
}: ProjectCardProps) {
  const { t } = useTranslation();

  return (
    <TagDiv>
      <TagDivHeader>
        <img src={src} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <br />
        </div>
      </TagDivHeader>
      <TagDivFooter>
        <p>
          {ToIcon.renderIcons(techStack).map((icon, index) =>
            icon ? <Fragment key={`icon-${index}`}>{icon}</Fragment> : null,
          )}
        </p>

        <div>
          <a href={previewLink} target="_blank" rel="noopener noreferrer">
            <ChainIcon /> {t("preview", { ns: ["projectCard"] })}
          </a>
          <a href={codeLink} target="_blank" rel="noopener noreferrer">
            <GitHubIcon /> {t("code", { ns: ["projectCard"] })}
          </a>
        </div>
      </TagDivFooter>
    </TagDiv>
  );
}

export default ProjectCard;
