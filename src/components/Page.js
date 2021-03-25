import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import MyInfo from "./MyInfo";

export default function Page() {
  const styles = useStyles();

  return (
    <div className={styles.grid}>
      <Grid container direction="row" spacing={2} wrap="wrap">
        <Grid item xs={12} sm={6} md={3}>
          <MyInfo />
        </Grid>
        <Grid item xs={12} sm={6} md={9}></Grid>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));
