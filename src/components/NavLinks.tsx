import { PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface NavTagProps {
  $isRow: boolean;
}

const NavTag = styled.nav<NavTagProps>`
  ${({ $isRow }) => css`
    display: flex;
    align-items: ${$isRow ? "center" : "start"};
    justify-content: ${$isRow ? "center" : "start"};
    flex-direction: ${$isRow ? "row" : "column"};
    gap: ${$isRow ? "54px" : "24px"};

    a {
      text-decoration: none;
      color: var(--light-content);
      font-weight: 500;
      font-size: 20px;
      line-height: 130%;
    }
  `}
`;

interface NavLink {
  to: string;
  name: string;
}

interface NavLinksProps extends PropsWithChildren {
  isRow?: boolean;
  onTo?: () => void;
}

function NavLinks({ children, isRow = true, onTo }: NavLinksProps) {
  const { t } = useTranslation();

  const links: NavLink[] = [
    { to: "home", name: t("home", { ns: ["menu"] }) },
    { to: "about", name: t("about", { ns: ["menu"] }) },
    { to: "techStack", name: t("tech-stack", { ns: ["menu"] }) },
    { to: "projects", name: t("projects", { ns: ["menu"] }) },
    { to: "contact", name: t("contact", { ns: ["menu"] }) },
  ];

  return (
    <NavTag $isRow={isRow ?? true}>
      {links.map(({ to, name }) => (
        <Link key={to} to={to} onClick={onTo ? onTo : undefined}>
          {name}
        </Link>
      ))}
      {children}
    </NavTag>
  );
}

export default NavLinks;
