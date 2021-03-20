import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import ButtonAppBar from "./components/ButtonsAppBar";
import SimpleBottomNavigation from "./components/SimpleBottomNavigation";
import LabeledLinearProgress from "./components/LabeledLinearProgress";
import Container from "@material-ui/core/Container";

const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: red[900],
    },
    secondary: {
      main: "#ffc400",
    },
  },
});

function App() {
  return (
    <div className="App" style={appStyle}>
      <ThemeProvider theme={customTheme}>
        <ButtonAppBar />
        <Container maxWidth="sm">
          <LabeledLinearProgress />
          <SimpleBottomNavigation />
        </Container>
      </ThemeProvider>
    </div>
  );
}

const appStyle = {
  height: "95vh",
  backgroundColor: "#f5f5f5"
};

export default App;
