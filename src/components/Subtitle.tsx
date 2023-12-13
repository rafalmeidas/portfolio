import { HTMLProps } from "react";
import styled from "styled-components";

const TagSpan = styled.h3`
  color: var(--caption-dark);
  text-align: center;
  font-size: 22px;
  font-weight: 400;
  line-height: 150%;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 28px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 32px;
  }
`;

function Subtitle(props: HTMLProps<HTMLHeadingElement>) {
  return <TagSpan {...props} />;
}

export default Subtitle;
