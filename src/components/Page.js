import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import MyInfo from "./MyInfo";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  grid: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));

export default function Page() {
  const styles = useStyles();

  return (
    <div className={styles.grid}>
      <Grid container direction="row" spacing={2} wrap="wrap">
        <Grid item xs={12} sm={3}>
          <MyInfo />
        </Grid>
        <Grid item xs={12} sm={9}>
        </Grid>
      </Grid>
    </div>
  );
}
