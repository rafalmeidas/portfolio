import styled from "styled-components";

import Linkedin from "../components/icons/Linkedin";
import Twitter from "../components/icons/Twitter";
import GitHub from "../components/icons/GitHub";
import Logo from "../components/icons/Logo";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 41px 177px 0 220px;

  > nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 54px;

    a {
      text-decoration: none;
      color: var(--light-content);
      font-weight: 500;
      font-size: 20px;
      line-height: 130%;
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Tech Stack</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
        <div>
          <a href="#">
            <GitHub />
          </a>
          <a href="#">
            <Twitter />
          </a>
          <a href="#">
            <Linkedin />
          </a>
        </div>
      </nav>
    </StyledHeader>
  );
}

export default Header;
