import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Strings from "./utils/Strings";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(12),
  },
  card: {
    paddingTop: "12vh",
    paddingBottom: "12vh",
    paddingLeft: "4vw",
    paddingRight: "4vw",
  },
  bar: {
    height: 10,
    borderRadius: 4,
  }
}));

function LabeledLinearProgress() {
  const styles = useStyles();
  
  return (
    <div className={styles.root}>
      <Card className={styles.card}>
        <Typography variant="h6" color="textPrimary" align="center" gutterBottom>
          {Strings.STILL_WORKING}
        </Typography>
        <LinearProgress className={styles.bar} color="secondary" />
      </Card>
    </div>
  );
}

export default LabeledLinearProgress;
