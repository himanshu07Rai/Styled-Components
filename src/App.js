import { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Routes from "./Routes";
import LightTheme from "themes/light";
import DarkTheme from "themes/dark";
const GlobalStyle = createGlobalStyle`
*, *::after, *::before {
    box-sizing: border-box;
  }
  html,body{
    background: ${(p) => p.theme.bodyBackgroundColor};
    color: ${(p) => p.theme.bodyFontColor};
    min-height: 100%;
    font-family:'Kaushan Script';
    margin: 0;
    padding: 0;
  }
`;

function App() {
  const [theme, setTheme] = useState(LightTheme);
  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((s) => (s.id === "light" ? DarkTheme : LightTheme));
        },
      }}
    >
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
