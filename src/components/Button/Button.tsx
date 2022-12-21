import React from "react";
import { Container, variantToColor } from "./styles";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  children: string;
}

function Button({ variant = "primary", children }: ButtonProps) {
  const { bgColor, hover, color, borderColor } = variantToColor[variant];
  return (
    <Container
      bgColor={bgColor}
      bColor={borderColor}
      color={color}
      hoverBgColor={hover.bgColor}
      hoverColor={hover.color}
    >
      {children}
    </Container>
  );
}

export default Button;
