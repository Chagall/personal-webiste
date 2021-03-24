import React from "react";
import "./css/App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import cyan from "@material-ui/core/colors/cyan";
import red from "@material-ui/core/colors/red";
import MenuAppBar from "./components/MenuAppBar";
import Page from "./components/Page";

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={customTheme}>
        <MenuAppBar />
        <Page />
      </ThemeProvider>
    </React.Fragment>
  );
}

const customTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: cyan[900],
    },
    secondary: {
      main: red[200],
    },
  },
});

/*

import Container from "@material-ui/core/Container";
import SimpleTabs from "./components/SimpleTabs";
<Container style={containerStyle} maxWidth="md" disableGutters>
<SimpleTabs />
</Container>

const containerStyle = {
  height: "98vh",
  backgroundColor: "white",
};
*/

export default App;
