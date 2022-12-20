import { useState } from "react";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./components/Button/ButtonStyled";
import { GlobalStyle, darkTheme, defaultTheme } from "./utils";
import { ThemeProvider } from "styled-components";
import SignUpModal from "./components/Modal/Modal";
 
function App() {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button
        style={{ margin: " 0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUseDarkTheme(!useDarkTheme)}
      >
        {useDarkTheme ? "Light Theme" : "Dark Theme"}
      </button>{" "}
      <button
        style={{ margin: " 0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setShowModal(!showModal)}
      >
        {showModal ? "Fechar Modal" : "Abrir Modal"}
      </button>
      <div
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: "100vw",
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <SignUpModal showModal={showModal} setShowModal={setShowModal} />
        <PrimaryButton small error>
          Hello World
        </PrimaryButton>
        <SecondaryButton large warning secondaryButtonWarning>
          Good Bye World
        </SecondaryButton>
        <TertiaryButton success error>
          Hey World
        </TertiaryButton>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
