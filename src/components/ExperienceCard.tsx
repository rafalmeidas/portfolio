import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import useMediaQuery from "../hooks/useMediaQuery";

const TagDiv = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: var(--bg-card-dark);
  padding: 10px;
  font-size: 12px;
  line-height: 150%;
  text-align: justify;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  transition: transform 0.1s ease-in;

  &:hover {
    -webkit-transform: rotateZ(0.5deg);
    -ms-transform: rotateZ(0.5deg);
    transform: rotateZ(0.5deg);
  }

  strong {
    font-size: 14px;
  }

  p {
    &:nth-child(1) {
      text-align: left;
      align-items: center;
      justify-content: start;
      gap: 5px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 15px;
    font-size: 15px;

    strong {
      font-size: 17px;
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 20px;
    font-size: 16px;

    strong {
      font-size: 17px;
    }
  }
`;

const TagDivDivider = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem auto;
  height: 0.5px;

  background-color: var(--title-dark);
  border-radius: 4px;
`;

interface FunctionExperience {
  functionName: string;
  activities: string;
  initialDate: string;
  finalDate?: string | null;
}

export interface ExperienceCardProps {
  companyName: string;
  functions: FunctionExperience[];
}

function ExperienceCard({ companyName, functions }: ExperienceCardProps) {
  const { t } = useTranslation();

  const matchMax768 = useMediaQuery({ maxWidth: 768 });
  const matchMin768Max1024 = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const matchMin1024 = useMediaQuery({ minWidth: 1024 });

  const smallScreen = matchMin768Max1024 || matchMax768;

  const finalDate = (final: string | null | undefined) =>
    !final ? t("at-the-moment", { ns: ["experienceCard"] }) : final;

  const hasAFunction = () => functions.length === 1;

  return (
    <TagDiv>
      {!smallScreen ? (
        <p>
          <strong>{t("company", { ns: ["experienceCard"] })}: </strong>{" "}
          {companyName}{" "}
          {hasAFunction() && matchMin1024
            ? `- ${functions[0].initialDate} - ${finalDate(
                functions[0].finalDate,
              )}`
            : null}
        </p>
      ) : null}

      {smallScreen ? (
        <p>
          <strong>{t("company", { ns: ["experienceCard"] })}: </strong>{" "}
          {companyName}
        </p>
      ) : null}

      {functions.map(
        (
          { initialDate, finalDate: final, functionName, activities },
          index,
        ) => (
          <Fragment key={`function-${index}`}>
            <p>
              <span>
                <strong>{t("period", { ns: ["experienceCard"] })}: </strong>{" "}
                {initialDate} - {finalDate(final)}
              </span>
            </p>

            <p>
              <strong>{t("function", { ns: ["experienceCard"] })}: </strong>{" "}
              {functionName}
            </p>

            <p>
              <strong>{t("activities", { ns: ["experienceCard"] })}: </strong>
              {activities}
            </p>

            {!hasAFunction() && index < functions.length - 1 ? (
              <TagDivDivider />
            ) : null}
          </Fragment>
        ),
      )}
    </TagDiv>
  );
}

export default ExperienceCard;
