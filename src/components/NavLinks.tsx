import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
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

interface NavLink {
  to: string;
  name: string;
}

const links: NavLink[] = [
  { to: "home", name: "Home" },
  { to: "about", name: "About" },
  { to: "tech-stack", name: "Tech Stack" },
  { to: "projects", name: "Projects" },
  { to: "contact", name: "Contact" },
];

function NavLinks({ children }: PropsWithChildren) {
  return (
    <NavTag>
      {links.map(({ to, name }) => (
        <Link key={to} to={to}>
          {name}
        </Link>
      ))}
      {children}
    </NavTag>
  );
}

export default NavLinks;
