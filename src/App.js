import "./App.css";
import { GlobalStyle } from "./theme/globalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/mainTheme";
import { Navbar } from "./components/Navbar/Navbar";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navbar />
        <div style={{ height: "200vh" }} />
      </ThemeProvider>
    </>
  );
};
