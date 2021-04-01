import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Strings from "../utils/Strings";

export default function MenuAppBar() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography
            className="neon-text"
            style={titleStyle}
            color="secondary"
            variant="h5"
          >
            {Strings.SITE_NAME}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette,
  },
}));

const titleStyle = {
  margin: "0 auto",
};
