import styled from "styled-components";

import JavaScriptIcon from "../components/icons/JavaScriptIcon";
import TypeScriptIcon from "../components/icons/TypeScriptIcon";
import MaterialUIIcon from "../components/icons/MaterialUIIcon";
import BitbucketIcon from "../components/icons/BitBucketIcon";
import AngularIcon from "../components/icons/AngularIcon";
import GitHubIcon from "../components/icons/GitHubIcon";
import GitLabIcon from "../components/icons/GitLabIcon";
import NextJsIcon from "../components/icons/NextJsIcon";
import Html5Icon from "../components/icons/Html5Icon";
import ReactIcon from "../components/icons/ReactIcon";
import Css3Icon from "../components/icons/Css3Icon";
import SassIcon from "../components/icons/SassIcon";
import JestIcon from "../components/icons/JestIcon";
import GitIcon from "../components/icons/GitIcon";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import JiraIcon from "../components/icons/JiraIcon";
import ReduxIcon from "../components/icons/ReduxIcon";
import SpringIcon from "../components/icons/SpringIcon";
import StyledComponentsIcon from "../components/icons/StyledComponentsIcon";
import CypressIcon from "../components/icons/CypressIcon";

const TagSection = styled.section`
  line-height: 150%;

  > div {
    margin-top: 1.5rem;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
    grid-gap: 1rem;
    align-items: center;
    justify-items: center;

    svg {
      width: 100px;
      height: 100px;
      padding: 1rem;
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
