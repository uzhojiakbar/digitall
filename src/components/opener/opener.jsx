import React, { useEffect, useRef } from "react";
import { Left, MainText, OpenerContainer, Right } from "./style";
import { gsap } from "gsap";

const Opener = () => {
  const pathRef = useRef(null);

  return (
    <OpenerContainer>
      <Left>Left</Left>
      <Right>right</Right>
    </OpenerContainer>
  );
};

export default Opener;
