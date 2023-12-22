import { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
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

function NavLinks({ children }: PropsWithChildren) {
  const { t } = useTranslation();

  const links: NavLink[] = [
    { to: "home", name: t("home", { ns: ["menu"] }) },
    { to: "about", name: t("about", { ns: ["menu"] }) },
    { to: "techStack", name: t("tech-stack", { ns: ["menu"] }) },
    { to: "projects", name: t("projects", { ns: ["menu"] }) },
    { to: "contact", name: t("contact", { ns: ["menu"] }) },
  ];

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
