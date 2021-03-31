import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

export default function MenuAppBar() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <img src="./logo.png" className={styles.image} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette,
  },
  image: {
    height: 20,
    display: "block",
    margin: "auto",
  },
}));
