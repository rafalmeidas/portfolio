import styled from "styled-components";

import MenuIcon from "../components/icons/MenuIcon";
import SocialGroup from "../components/SocialGroup";
import NavLinks from "../components/NavLinks";
import Logo from "../components/Logo";

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  > nav {
    display: none;
    flex-direction: row;
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
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 20px 100px 20px 100px;

    > nav {
      display: none;
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 41px 177px 220px 177px;

    > nav {
      display: flex;
    }
  }
`;

const DivTag = styled.div`
  display: flex;

  button {
    background-color: transparent;
    border: none;
    width: 35px;
    height: 35px;
    cursor: pointer;

    svg {
      width: inherit;
      height: inherit;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    display: flex;

    button {
      width: 40px;
      height: 40px;
    }
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

function Header() {
  return (
    <TagHeader>
      <Logo />
      <DivTag>
        <button aria-label="controlar menu">
          <MenuIcon />
        </button>
      </DivTag>
      <NavLinks>
        <SocialGroup />
      </NavLinks>
    </TagHeader>
  );
}

export default Header;
