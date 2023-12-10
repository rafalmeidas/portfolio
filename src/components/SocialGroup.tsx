import styled from "styled-components";

import Linkedin from "./icons/Linkedin";
import Twitter from "./icons/Twitter";
import GitHub from "./icons/GitHub";

const DivTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

function SocialGroup() {
  return (
    <DivTag>
      <a href="https://github.com/rafalmeidas" target="_blank">
        <GitHub />
      </a>
      <a href="#" target="_blank">
        <Twitter />
      </a>
      <a href="https://www.linkedin.com/in/rafaelalmeidasilva" target="_blank">
        <Linkedin />
      </a>
    </DivTag>
  );
}

export default SocialGroup;
