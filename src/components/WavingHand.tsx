import styled, { keyframes } from "styled-components";

const wavingHand = keyframes`
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const TagSpan = styled.span`
  animation: ${wavingHand} 2.5s infinite;
  transform-origin: 70% 70%;
  display: inline-block;
`;

function WavingHand() {
  return <TagSpan>👋</TagSpan>;
}

export default WavingHand;
