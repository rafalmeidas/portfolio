import styled from "styled-components";

import StyledComponentsIcon from "./icons/StyledComponentsIcon";
import JavaScriptIcon from "./icons/JavaScriptIcon";
import TypeScriptIcon from "./icons/TypeScriptIcon";
import MaterialUIIcon from "./icons/MaterialUIIcon";
import BitbucketIcon from "./icons/BitBucketIcon";
import AngularIcon from "./icons/AngularIcon";
import CypressIcon from "./icons/CypressIcon";
import GitHubIcon from "./icons/GitHubIcon";
import GitLabIcon from "./icons/GitLabIcon";
import NextJsIcon from "./icons/NextJsIcon";
import SpringIcon from "./icons/SpringIcon";
import Html5Icon from "./icons/Html5Icon";
import ReactIcon from "./icons/ReactIcon";
import ReduxIcon from "./icons/ReduxIcon";
import Css3Icon from "./icons/Css3Icon";
import SassIcon from "./icons/SassIcon";
import JestIcon from "./icons/JestIcon";
import JiraIcon from "./icons/JiraIcon";
import GitIcon from "./icons/GitIcon";
import Subtitle from "./Subtitle";
import Title from "./Title";

const TagSection = styled.section`
  line-height: 150%;

  > div {
    margin-top: 1.5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    align-items: center;
    justify-items: center;

    svg {
      width: 70px;
      height: 70px;
      padding: 0.5rem;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    > div {
      grid-template-columns: repeat(4, 1fr);

      svg {
        width: 100px;
        height: 100px;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    > div {
      grid-template-columns: repeat(6, 1fr);

      svg {
        width: 120px;
        height: 120px;
        padding: 1rem;
      }
    }
  }
`;

function TechStack() {
  return (
    <TagSection>
      <Title>My Tech Stack</Title>
      <Subtitle>Technologies I’ve been working with recently</Subtitle>

      <div>
        <Html5Icon />
        <Css3Icon />
        <SassIcon />
        <StyledComponentsIcon />
        <JavaScriptIcon />
        <TypeScriptIcon />
        <ReactIcon />
        <ReduxIcon />
        <NextJsIcon />
        <AngularIcon />
        <JestIcon />
        <CypressIcon />
        <MaterialUIIcon />
        <GitIcon />
        <BitbucketIcon />
        <GitHubIcon />
        <GitLabIcon />
        <SpringIcon />
        <JiraIcon />
      </div>
    </TagSection>
  );
}

export default TechStack;
