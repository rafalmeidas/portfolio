import { PropsWithChildren } from "react";
import styled from "styled-components";

const NavTag = styled.nav`
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
`;

function NavLinks({ children }: PropsWithChildren) {
  return (
    <NavTag>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Tech Stack</a>
      <a href="#">Projects</a>
      <a href="#">Contact</a>
      {children}
    </NavTag>
  );
}

export default NavLinks;
