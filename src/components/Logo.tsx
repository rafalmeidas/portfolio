import styled from "styled-components";

const TagH1 = styled.h1`
  display: flex;
  align-items: center;
  flex-direction: column;
  line-height: 100%;
  gap: 1px;
  font-size: 18px;
  font-weight: 400;

  background-image: var(--gradient);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: var(--title-dark);

  strong {
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    white-space: nowrap;
  }

  strong span:first-child {
    font-size: calc(20px + 4px);
  }

  strong span:last-child {
    font-size: calc(20px + 8px);
  }
`;

function Logo() {
  return (
    <TagH1>
      <strong>
        <span>{"<"}</span>
        <span>dev-rafael-silva</span>
        <span>{"/>"}</span>
      </strong>
    </TagH1>
  );
}

export default Logo;
