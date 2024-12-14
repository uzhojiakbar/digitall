import React from "react";
import { RootContainer } from "./style";
import "./global.css";
import Header from "../components/header/header";

const Root = () => {
  return (
    <RootContainer>
      <div className="main">
        <Header />
      </div>
    </RootContainer>
  );
};

export default Root;
