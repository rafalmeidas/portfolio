import { useTranslation } from "react-i18next";
import styled from "styled-components";

import ExperienceCard, {
  ExperienceCardProps,
} from "../components/ExperienceCard";
import Title from "../components/Title";

const TagSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: 1rem;

  article {
    width: 100%;
    line-height: 150%;

    h1,
    span {
      width: 100%;
      text-align: center;
    }

    h1 {
      font-size: 40px;
    }

    > p {
      text-align: justify;
      padding-bottom: 1rem;
    }

    &:first-child {
      margin-bottom: 1rem;
    }

    &:last-child {
      margin-bottom: 3rem;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }

  @media screen and (min-width: 1024px) {
    padding-top: 6rem;

    article {
      h1 {
        font-size: 60px;
        margin-bottom: 7px;
      }
    }
  }
`;

const TagArticleTitle = styled.article`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
`;

const TagDivExperiences = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

function About() {
  const { t } = useTranslation();

  const experiences: ExperienceCardProps[] = [
    {
      companyName: "Petize",
      functions: [
        {
          functionName: `${t("front-end-developer", {
            ns: ["about"],
          })} (React, Angular)`,
          activities: t("petize-activity", { ns: ["about"] }),
          initialDate: "09/2023",
          finalDate: null,
        },
      ],
    },
    {
      companyName: "Objective",
      functions: [
        {
          functionName: `${t("front-end-developer", {
            ns: ["about"],
          })} (React, Angular, Spring)`,
          activities: t("objective-activity", { ns: ["about"] }),
          initialDate: "06/2021",
          finalDate: "08/2023",
        },
      ],
    },
    {
      companyName: t("company-uoppecan", {
        ns: ["about"],
      }),
      functions: [
        {
          functionName: t("it-assistant-1", { ns: ["about"] }),
          activities: t("uoppecan-activity-1", { ns: ["about"] }),
          initialDate: "09/2020",
          finalDate: "06/2021",
        },
        {
          functionName: t("it-assistant-2", { ns: ["about"] }),
          activities: t("uoppecan-activity-2", { ns: ["about"] }),
          initialDate: "02/2020",
          finalDate: "09/2020",
        },
      ],
    },
    {
      companyName: "Simple Work Systems",
      functions: [
        {
          functionName: t("technical-support", { ns: ["about"] }),
          activities: t("simple-work-activity", { ns: ["about"] }),
          initialDate: "09/2018",
          finalDate: "10/2019",
        },
      ],
    },
  ];

  return (
    <TagSection>
      <TagArticleTitle>
        <h1>Rafael Silva</h1>
        <span>Front-end Developer</span>
      </TagArticleTitle>
      <article>
        <Title>{t("presentation-title", { ns: ["about"] })}</Title>
        <p>{t("presentation-line-1", { ns: ["about"] })},</p>

        <p>{t("presentation-line-2", { ns: ["about"] })}</p>

        <p>{t("presentation-line-3", { ns: ["about"] })}</p>

        <p>{t("presentation-line-4", { ns: ["about"] })}</p>

        <p>{t("presentation-line-5", { ns: ["about"] })}</p>

        <p>{t("presentation-line-6", { ns: ["about"] })}</p>

        <p>
          {t("presentation-line-7", { ns: ["about"] })},
          <br /> Rafael Silva
        </p>
      </article>

      <article>
        <Title>{t("experience-title", { ns: ["about"] })}</Title>
        <TagDivExperiences>
          {experiences.map(({ companyName, functions }, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              companyName={companyName}
              functions={functions}
            />
          ))}
        </TagDivExperiences>
      </article>
    </TagSection>
  );
}

export default About;
