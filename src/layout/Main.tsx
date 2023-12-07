import { PropsWithChildren } from "react";
import styled from "styled-components";

const TagMain = styled.main`
  padding: 0 177px;
`;

function Main({ children }: PropsWithChildren) {
  return <TagMain>{children}</TagMain>;
}

export default Main;
