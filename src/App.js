import { useState, useEffect } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Routes from "./Routes";
import { Spinner } from "components/common";
import LightTheme from "themes/light";
import DarkTheme from "themes/dark";
import axios from "axios";
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

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const [theme, setTheme] = useState(
    () => JSON.parse(localStorage.getItem("Mytheme")) || LightTheme
  );
  const [data, setData] = useState(null);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await axios.get("https://www.breakingbadapi.com/api/episodes");
    setData(res.data);
  };
  console.log(data);

  // if (!data) return <Spinner />;

  return !data ? (
    <Container>
      <Spinner />
    </Container>
  ) : (
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
};

export default App;
