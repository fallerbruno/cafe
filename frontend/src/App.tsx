import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { defaultTheme } from "./styles/theme/DefaultTheme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
