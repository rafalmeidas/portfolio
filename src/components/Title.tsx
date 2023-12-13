import { HTMLProps } from "react";
import styled from "styled-components";

const TagH2 = styled.h2`
  color: var(--subtitle-dark);
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  line-height: 150%;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 38px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 48px;
  }
`;

function Title(props: HTMLProps<HTMLHeadingElement>) {
  return <TagH2 {...props} />;
}

export default Title;
