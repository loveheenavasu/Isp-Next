import React from "react";

import ReactCompareImage from "react-compare-image";
import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: var(--br);
`;
export default function RevealSlider() {
  const before =
    "https://staging.innerspiritphoto.com/wp-content/uploads/2022/08/before-boudoir.jpg";
  const after =
    "https://staging.innerspiritphoto.com/wp-content/uploads/2022/08/after-boudoir.jpg";
  return (
    <Wrapper className="spacing">
      <ReactCompareImage leftImage={before} rightImage={after} />
      <p className="subhead italics accent caps bold center">
        slide to see the before & after of Rosemarie's Calgary boudoir
        photography session!
      </p>
    </Wrapper>
  );
}
