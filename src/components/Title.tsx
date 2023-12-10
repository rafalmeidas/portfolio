import { HTMLProps } from "react";
import styled from "styled-components";

const TagH2 = styled.h2`
  color: var(--subtitle-dark);
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  line-height: 150%;
`;

function Title(props: HTMLProps<HTMLHeadingElement>) {
  return <TagH2 {...props} />;
}

export default Title;
