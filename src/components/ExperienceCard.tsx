import styled from "styled-components";

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
      display: none;
      text-align: left;
      align-items: center;
      justify-content: start;
      gap: 5px;
    }

    &:nth-child(2) {
      display: block;
    }

    &:nth-child(3) {
      display: block;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 15px;
    font-size: 15px;

    strong {
      font-size: 17px;
    }

    p {
      &:nth-child(1) {
        display: flex;
      }

      &:nth-child(2) {
        display: none;
      }

      &:nth-child(3) {
        display: none;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 20px;
    font-size: 16px;

    strong {
      font-size: 17px;
    }

    p {
      &:nth-child(1) {
        display: flex;
      }

      &:nth-child(2) {
        display: none;
      }

      &:nth-child(3) {
        display: none;
      }
    }
  }
`;

export interface ExperienceCardProps {
  companyName: string;
  functionName: string;
  activities: string;
  initialDate: string;
  finalDate?: string | null;
}

function ExperienceCard({
  companyName,
  functionName,
  activities,
  initialDate,
  finalDate: final,
}: ExperienceCardProps) {
  const finalDate = !final ? "at the moment" : final;

  return (
    <TagDiv>
      <p>
        <strong>Company: </strong> {companyName} - {initialDate} - {finalDate}
      </p>

      <p>
        <strong>Company: </strong> {companyName}
      </p>

      <p>
        <span>
          <strong>Period: </strong> {initialDate} - {finalDate}
        </span>
      </p>

      <p>
        <strong>Function: </strong> {functionName}
      </p>

      <p>
        <strong>Activities: </strong>
        {activities}
      </p>
    </TagDiv>
  );
}

export default ExperienceCard;
