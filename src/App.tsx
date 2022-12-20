import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Button from "./components/Button/Button";
import SignUpModal from "./components/Modal/Modal";
import { GlobalStyle, darkTheme, defaultTheme } from "./utils";

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
      </button>
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
        <Button small={true} error={true}>
          Hello World
        </Button>
        <Button large={true} warning={true} secondaryButtonWarning={true}>
          Good Bye World
        </Button>
        <Button success={true} error={true}>
          Hey World
        </Button>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
