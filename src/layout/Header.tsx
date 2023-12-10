import styled from "styled-components";

import SocialGroup from "../components/SocialGroup";
import NavLinks from "../components/NavLinks";
import Logo from "../components/icons/Logo";

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 41px 177px 220px 177px;

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
  }
`;

function Header() {
  return (
    <TagHeader>
      <Logo />
      <NavLinks>
        <SocialGroup />
      </NavLinks>
    </TagHeader>
  );
}

export default Header;
