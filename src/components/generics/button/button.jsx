import React from "react";
import { ButtonContainer } from "./style";

const Button = ({
  type = "outline",
  text = " ",
  href = "",
  className = "",
}) => {
  if (type == "outline") {
    return (
      <ButtonContainer className={className} href={href ? href : ""}>
        {text}
      </ButtonContainer>
    );
  }
};

export default Button;
