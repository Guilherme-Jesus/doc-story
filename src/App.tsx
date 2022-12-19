import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./components/Button/ButtonStyled";
import { GlobalStyle } from "./components/utils";

function App() {
  return (
    <div>
      <PrimaryButton>Primary</PrimaryButton>
      <SecondaryButton>Secondary</SecondaryButton>
      <TertiaryButton>Tertiary</TertiaryButton>
      <GlobalStyle />
    </div>
  );
}

export default App;
