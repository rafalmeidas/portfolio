import styled, { keyframes } from "styled-components";
import { useTranslation } from "react-i18next";

import WavingHand from "./WavingHand";

import profile from "../assets/profile.jpg";

const TagSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 50px 0;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;

    h1 {
      color: var(--title-dark);
      font-size: 32px;
      font-weight: 700;
      line-height: 130%;

      strong {
        background-image: var(--gradient);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: var(--title-dark);
      }
    }

    > div {
      order: -1;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: calc(240px + 12px);
      height: calc(240px + 12px);
      border-radius: 50%;
      background: var(--gradient);

      img {
        width: 240px;
        height: 240px;

        border-radius: inherit;

        object-fit: cover;
        object-position: center center;
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    height: calc(100vh - (60px));

    > div {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;

      h1 {
        font-size: 48px;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    height: calc(100vh - (79px));
    align-items: center;
    justify-content: space-between;

    > div {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      flex: 1;

      h1 {
        font-size: 58px;
      }

      > div {
        order: 0;
        width: calc(349px + 12px);
        height: calc(349px + 12px);

        img {
          width: 349px;
          height: 349px;
        }
      }
    }
  }
`;

const animateArrow = keyframes`
  0% { margin-top: 0; }
  50% { margin-top: 100px; }
  100% { margin-top: 0; }
`;

const AnimatedArrow = styled.p`
  display: none;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;

  span {
    width: 10px;
    height: 40px;
    background-color: white;
    border-radius: 5px;
    margin: 6px;
    animation: ${animateArrow} 1.1s ease-in-out infinite;
  }

  span:nth-of-type(1) {
    transform: rotate(-45deg);
  }

  span:nth-of-type(2) {
    transform: rotate(45deg);
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    display: flex;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

function ProfileHeader() {
  const { t } = useTranslation();

  return (
    <TagSection>
      <div>
        <h1>
          {t("greeting", { ns: ["profileHeader"] })} <WavingHand />, <br />{" "}
          {t("name", { ns: ["profileHeader"] })} <strong>Rafael Silva</strong>
          <br />
          {t("role", { ns: ["profileHeader"] })}
        </h1>
        <div>
          <img alt="Rafael Silva" src={profile} />
        </div>
      </div>

      <AnimatedArrow>
        <span></span>
        <span></span>
      </AnimatedArrow>
    </TagSection>
  );
}

export default ProfileHeader;
