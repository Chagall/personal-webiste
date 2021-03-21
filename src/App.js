import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import Container from "@material-ui/core/Container";
import SimpleTabs from "./components/SimpleTabs";

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
        <Container style={containerStyle} maxWidth="md" disableGutters>
          <SimpleTabs />
        </Container>
      </ThemeProvider>
    </div>
  );
}

const appStyle = {
  height: "98vh",
  backgroundColor: "#f5f5f5",
};

const containerStyle = {
  height: "98vh",
  backgroundColor: "white",
};

export default App;
