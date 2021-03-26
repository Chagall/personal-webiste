import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MyInfo from "./MyInfo";

export default function Page() {
  const styles = useStyles();

  return (
    <div className={styles.grid}>
      <MyInfo />
    </div>
  );
}

const useStyles = makeStyles({
  grid: {
    marginBottom: "12vh",
    marginTop: "8vh",
    marginLeft: "8vw",
    marginRight: "8vw",
  },
});
