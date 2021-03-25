import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Strings from "./utils/Strings";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";

let musicList = [
  "8_Bit_Retro_Funk_-_David_Renda.mp3",
  "8_Bit_Surf_-_David_Renda.mp3",
  "A_Bit_Of_Hope_-_David_Fesliyan.mp3",
  "Arcade_Kid_-_David_Renda.mp3",
  "Old_Video_Game_Music_-_David_Fesliyan.mp3",
];

var stream = new Audio();
stream.preload = "none";

export default function BottomAppBar() {
  const classes = useStyles();
  let [isPlaying, setPlaying] = useState(false);
  let [musicName, setMusicName] = useState(Strings.NOTHING);

  const handleClick = () => {
    !isPlaying ? playMusic() : pauseMusic();
  };

  const playMusic = () => {
    let randomMusicNumber = Math.floor(
      Math.random() * (musicList.length - 0) + 0
    );
    let music = musicList[randomMusicNumber];
    stream = new Audio(`/music/${music}`);
    stream.play();

    setPlaying(true);
    setMusicName(music);
  };

  const pauseMusic = () => {
    stream.pause();
    stream.src = "";
    stream.load();

    stream = null;

    stream = new Audio();
    stream.preload = "none";
    stream.pause();

    setPlaying(false);
    setMusicName(Strings.NOTHING);
  };

  const currentButton = () => {
    return !isPlaying ? <PlayArrowIcon /> : <PauseIcon />;
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <Typography variant="button">
            {`${Strings.NOW_PLAYING} ${musicName}`}
          </Typography>
          <Fab
            color="secondary"
            aria-label="add"
            className={classes.fabButton}
            onClick={handleClick}
          >
            {currentButton()}
          </Fab>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

const useStyles = makeStyles(() => ({
  appBar: {
    top: "auto",
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
}));