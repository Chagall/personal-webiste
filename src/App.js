import React from "react";
import "./css/App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import blue from "@material-ui/core/colors/blue";
import yellow from "@material-ui/core/colors/yellow";
import Page from "./components/Page";
import BottomAppBar from "./components/BottomAppBar";

function App() {
  return (
    <div>
      <ThemeProvider theme={customTheme}>
        <Container style={containerStyle}>
          <Page />
          <BottomAppBar />
        </Container>
      </ThemeProvider>
    </div>
  );
}

const customTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: blue["900"],
    },
    secondary: {
      main: yellow["A200"],
    },
  },
});

const containerStyle = {
  paddingTop: "4vh",
  height: "99vh",
};

export default App;
