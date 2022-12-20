import { GlobalStyle } from "../../utils";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "./ButtonStyled";

function Button() {
  return (
    <div>
      <PrimaryButton>Primary</PrimaryButton>
      <SecondaryButton>Secondary</SecondaryButton>
      <TertiaryButton>Tertiary</TertiaryButton>
      <GlobalStyle />
    </div>
  );
}

export default Button;
