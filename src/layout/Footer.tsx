import styled from "styled-components";

import SocialGroup from "../components/SocialGroup";
import NavLinks from "../components/NavLinks";
import Logo from "../components/icons/Logo";

const FooterTag = styled.footer`
  padding: 0 177px 60px 177px;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      display: flex;
      align-items: center;
      gap: 33px;
    }
  }

  hr {
    margin: 40px 0;
    height: 5px;
    background-color: var(--title-light);
    border: none;
  }
`;

function Footer() {
  return (
    <FooterTag>
      <div>
        <Logo />
        <div>
          <span>+55 (44) 9 9856-0723</span>
          <span>rafalmeidas21@gmail.com</span>
          <SocialGroup />
        </div>
      </div>
      <hr />
      <div>
        <NavLinks />
        <span>Designed and build by Rafael Silva with ❤️</span>
      </div>
    </FooterTag>
  );
}

export default Footer;
