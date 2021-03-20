import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
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

export default function ButtonAppBar() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={styles.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={styles.title}>
            {Strings.HOME}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}