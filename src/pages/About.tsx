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

const experiences: ExperienceCardProps[] = [
  {
    companyName: "Petize",
    functionName: "Front-end Developer (React, Angular)",
    activities:
      "Maintain and develop new features in Petize systems (products), using Javascript, Typescript, React and Angular technologies, development of automated tests.",
    initialDate: "09/2023",
    finalDate: null,
  },
  {
    companyName: "Objective",
    functionName: "Front-end Developer (React, Angular, Spring)",
    activities:
      "Create new applications from scratch, from the structure and pattern used and libraries, maintain and develop new functionalities in Objective systems (products) using the following technologies in Front-end, Javascript, Typescript, React, Angular and Vue, I also worked a little in the Back-end, using .NET Core and Spring Boot, I also developed automated, unit and integration tests, I worked on large projects developing with quality. I performed requirements analysis to create tasks in Jira for the team, both for Front-end, separating activities by components, pages and services, and Back-end in creating and maintaining endpoints.",
    initialDate: "06/2021",
    finalDate: "08/2023",
  },
  {
    companyName: "Hospital do Câncer Uopeccan",
    functionName: "Assistente de T.I",
    activities:
      "User support in using the Tasy system, creating reports using the Oracle database and the Tasy report creation tool.",
    initialDate: "09/2020",
    finalDate: "06/2021",
  },
  {
    companyName: "Hospital do Câncer Uopeccan",
    functionName: "Assistente de T.I",
    activities:
      "User support in using the Tasy system, creating reports using the Oracle database and the Tasy report creation tool.",
    initialDate: "02/2020",
    finalDate: "09/2020",
  },
  {
    companyName: "Simple Work Systems",
    functionName: "Technical support",
    activities:
      "User support in the use of Simple Work systems, involving all types of invoices, assisting the user in the processes. Provided training on the use of systems and implementation of systems.",
    initialDate: "02/2020",
    finalDate: "09/2020",
  },
];

function About() {
  return (
    <TagSection>
      <TagArticleTitle>
        <h1>Rafael Silva</h1>
        <span>Front-end Developer</span>
      </TagArticleTitle>
      <article>
        <Title>Presentation</Title>
        <p>Dear Recruiter,</p>

        <p>
          It is with great enthusiasm that I introduce myself as a professional
          with a degree in Information Systems and over 2 years of solid
          experience in front-end web development. Throughout my journey, I have
          honed my skills using tools such as React and Angular, highlighting my
          expertise in implementing automated tests using technologies like
          Jest, React Testing Library, and Cypress.
        </p>

        <p>
          My background includes practical experience in diverse business areas,
          such as Invoice Issuance, Healthcare, Clinic, and Insurance. Over the
          years, I have taken on multifaceted roles, ranging from Front-end
          Developer to Analyst, Infrastructure Support, and Technical Support.
          This variety of experiences has provided me with a comprehensive
          understanding of the technological landscape and the ability to tackle
          challenges with flexibility and effectiveness.
        </p>

        <p>
          In addition to my hands-on experience, I have consistently sought to
          enhance my knowledge through specialized courses. I emphasize my
          dedication to gaining expertise in technologies like React, Angular,
          Spring Boot, Typescript, Cypress, and Automated Testing, reinforcing
          my commitment to continuous learning and the pursuit of excellence in
          my field.
        </p>

        <p>
          I am excited about the possibility of joining your team, where I
          intend to apply responsibly and in alignment with the organization's
          requirements all the knowledge acquired throughout my career. I am
          available to discuss how my skills and experiences can contribute to
          the company's objectives.
        </p>

        <p>
          Thank you for your attention, and I look forward to the opportunity
          for an interview to further discuss how I can add value to your team.
        </p>

        <p>
          Sincerely,
          <br /> Rafael Silva
        </p>
      </article>
      <article>
        <Title>Experiences</Title>
        <TagDivExperiences>
          {experiences.map(
            (
              { companyName, functionName, activities, initialDate, finalDate },
              index,
            ) => (
              <ExperienceCard
                key={`experience-${index}`}
                companyName={companyName}
                functionName={functionName}
                activities={activities}
                initialDate={initialDate}
                finalDate={finalDate}
              />
            ),
          )}
        </TagDivExperiences>
      </article>
    </TagSection>
  );
}

export default About;
