import React from "react";
import { StyledButton } from "./ButtonStyles";

interface ButtonProps {
  small?: boolean;
  large?: boolean;
  medium?: boolean;
  warning?: boolean;
  primaryButtonWarning?: boolean;
  secondaryButtonWarning?: boolean;
  error?: boolean;
  primaryButtonError?: boolean;
  secondaryButtonError?: boolean;
  success?: boolean;
  primaryButtonSuccess?: boolean;
  secondaryButtonSuccess?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

export default function Button({ ...props }: ButtonProps) {
  return (
    <React.Fragment>
      <StyledButton {...props}>{props.children}</StyledButton>
    </React.Fragment>
  );
}
