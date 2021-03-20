import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    top: "auto",
    bottom: 0,
    left: 0,
    right: 0,
    magin: "auto",
  },
});

export default function SimpleBottomNavigation() {
  const styles = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      color="secondary"
      className={styles.root}
    >
      <BottomNavigationAction label="Home" icon={<HomeRoundedIcon />} />
    </BottomNavigation>
  );
}
