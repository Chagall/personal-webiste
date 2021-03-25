import React from "react";
import "./css/App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import yellow from "@material-ui/core/colors/yellow";
import Page from "./components/Page";
import BottomAppBar from "./components/BottomAppBar";

function App() {
  return (
    <div style={{height: "99vh"}}>
      <ThemeProvider theme={customTheme}>
        <Page />
        <BottomAppBar />
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

export default App;
