import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import Typography from "@material-ui/core/Typography";
import Strings from "./utils/Strings";

var musicUrl = "/music/rf_nt.mp3";
var stream = new Audio(musicUrl);
stream.preload = "none";

export default function MenuAppBar() {
  const styles = useStyles();
  let [isPlaying, setPlaying] = useState(false);
  let [musicName, setMusicName] = useState(Strings.NOTHING);

  const handleClick = () => {
    if (!isPlaying) {
      playMusic();
      setPlaying(true);
      setMusicName(Strings.RF_NT);
    } else {
      pauseMusic();
      setPlaying(false);
      setMusicName(Strings.NOTHING);
    }
  };

  const playMusic = () => stream.play();

  const pauseMusic = () => {
    stream.pause();
    stream.src = "";
    stream.load();

    stream = null;

    stream = new Audio();
    stream.src = musicUrl;
    stream.preload = "none";
    stream.pause();
  };

  const currentButton = () => {
    return !isPlaying ? <PlayArrowIcon /> : <PauseCircleFilledIcon />;
  };

  return (
    <div className={styles.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <div className={styles.controls}>
            <IconButton
              color="inherit"
              aria-label="play"
              onClick={() => handleClick()}
            >
              {currentButton()}
            </IconButton>
          </div>
          <Typography variant="body1" className={styles.title}>
            {Strings.NOW_PLAYING} {musicName}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette,
    marginTop: theme.spacing(-1),
    marginLeft: theme.spacing(-1),
    marginRight: theme.spacing(-1),
  },
  controls: {
    display: "flex",
    alignItems: "flex-start",
    marginLeft: theme.spacing(-2),
  },
  title: {
    flexGrow: 1,
  },
}));
