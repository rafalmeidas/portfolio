import styled from "styled-components";

import background from "../assets/dev.gif";

const TagSection = styled.section`
  height: calc(100vh - (60px + 20px) - (163px + 20px));
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    height: calc(100vh - 60px - (163px + 20px));
  }

  @media screen and (min-width: 1024px) {
    height: calc(100vh - 79px - (150px + 20px));
  }
`;

function Dev() {
  return (
    <TagSection>
      <img src={background} alt="Página em desenvolvimento" />
    </TagSection>
  );
}

export default Dev;
