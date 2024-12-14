import React from "react";
import Navbar from "../navbar/navbar";
import Opener from "../opener/opener";
import { HeaderContainer } from "./style";

const Header = () => {
  return (
    <HeaderContainer>
      <Navbar />
      <Opener />
    </HeaderContainer>
  );
};

export default Header;
