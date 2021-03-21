import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Strings from "./utils/Strings";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette,
    flexGrow: 2,
    marginTop: theme.spacing(-1),
    marginLeft: theme.spacing(-1),
    marginRight: theme.spacing(-1)
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={styles.title}>
            {Strings.HOME}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}