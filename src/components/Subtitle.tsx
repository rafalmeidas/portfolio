import { HTMLProps } from "react";
import styled from "styled-components";

const TagSpan = styled.h3`
  color: var(--caption-dark);
  text-align: center;
  font-size: 32px;
  font-weight: 400;
  line-height: 150%;
`;

function Subtitle(props: HTMLProps<HTMLHeadingElement>) {
  return <TagSpan {...props} />;
}

export default Subtitle;
