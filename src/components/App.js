import React from "react";
import "../css/App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import blue from "@material-ui/core/colors/blue";
import yellow from "@material-ui/core/colors/yellow";
import Homepage from "./Homepage";
import BottomAppBar from "./menus/BottomAppBar";
import MenuAppBar from "./menus/MenuAppBar";

function App() {
  return (
    <div style={rootStyle}>
      <ThemeProvider theme={customTheme}>
        <MenuAppBar />
        <Container>
          <Homepage />
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

const rootStyle = {
  height: "100vh",
};

export default App;
