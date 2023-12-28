import { useEffect, useState } from "react";
import styled from "styled-components";

import ChooseLanguage from "../components/ChooseLanguage";
import SocialGroup from "../components/SocialGroup";
import MenuIcon from "../components/icons/MenuIcon";
import useMediaQuery from "../hooks/useMediaQuery";
import NavLinks from "../components/NavLinks";
import Drawer from "../components/Drawer";
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
    padding: 20px 100px 0 100px;

    > nav {
      display: none;
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 41px 177px 0 177px;

    > nav {
      display: flex;
    }
  }

  @media screen and (min-width: 1920px) {
    padding: 41px 400px 0 400px;
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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const matchMin1024 = useMediaQuery({ minWidth: 1024 });

  const toggleDrawer = () => {
    const open = !isDrawerOpen;

    if (open) document.body.classList.add("no-scroll");
    else document.body.classList.remove("no-scroll");

    setIsDrawerOpen(open);
  };

  useEffect(() => {
    if (matchMin1024 && isDrawerOpen) {
      setIsDrawerOpen(false);
    }
  }, [isDrawerOpen, matchMin1024]);

  return (
    <>
      <TagHeader>
        <Logo />
        <DivTag>
          <button aria-label="controlar menu" onClick={toggleDrawer}>
            <MenuIcon />
          </button>
        </DivTag>
        <NavLinks>
          <SocialGroup />
          <ChooseLanguage />
        </NavLinks>
      </TagHeader>

      {isDrawerOpen ? <Drawer open={isDrawerOpen} onTo={toggleDrawer} /> : null}
    </>
  );
}

export default Header;
