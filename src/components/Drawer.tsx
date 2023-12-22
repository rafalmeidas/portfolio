import styled, { css } from "styled-components";

import ChooseLanguage from "./ChooseLanguage";
import SocialGroup from "./SocialGroup";
import NavLinks from "./NavLinks";

const TagDivOverlay = styled.div<{
  $open: boolean;
}>`
  ${({ $open }) => css`
    position: absolute;
    top: 0;
    width: ${$open ? "100vw" : 0};
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
    cursor: pointer;
  `}
`;

const DivTagDrawer = styled.div<{
  $open: boolean;
}>`
  ${({ $open }) => css`
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    background-color: var(--bg-dark);
    overflow-x: hidden;
    padding: ${$open ? "60px 20px 20px 20px" : "0"};
    width: ${$open ? "250px" : "0"};

    transition: all 0.4s ease-in-out;
  `}
`;

const DivTagContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  > section {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

interface onToProps {
  open: boolean;
  onTo: () => void;
}

function Drawer({ open, onTo }: onToProps) {
  return (
    <TagDivOverlay $open={open} onClick={onTo}>
      <DivTagDrawer $open={open}>
        <DivTagContent>
          <section>
            <ChooseLanguage />
            <NavLinks isRow={false} onTo={onTo} />
          </section>

          <SocialGroup />
        </DivTagContent>
      </DivTagDrawer>
    </TagDivOverlay>
  );
}

export default Drawer;
