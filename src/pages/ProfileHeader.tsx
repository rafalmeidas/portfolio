import styled from "styled-components";

import WavingHand from "../components/WavingHand";
import profile from "../assets/profile.jpg";

const TagSection = styled.section`
  width: 100%;
  height: calc(100vh - (320px));
  padding-top: 50px;

  > div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    h1 {
      color: var(--title-dark);
      font-size: 58px;
      font-weight: 700;
      line-height: 130%;
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 370px;
      height: 370px;
      border-radius: 50%;
      background: var(--gradient);

      img {
        width: 349px;
        height: 349px;

        border-radius: inherit;

        object-fit: cover;
        object-position: center center;
      }
    }
  }
`;

function ProfileHeader() {
  return (
    <TagSection>
      <div>
        <h1>
          Hi <WavingHand />, <br /> My name is Pavan MG <br />I build things for
          web
        </h1>
        <div>
          <img alt="Rafael Silva" src={profile} />
        </div>
      </div>
    </TagSection>
  );
}

export default ProfileHeader;
