import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Strings from "../utils/Strings";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import SkipNextIcon from "@material-ui/icons/SkipNext";

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
  let [currentMusicNum, setCurrentMusicNum] = useState(0);

  const handlePlayClick = () => {
    !isPlaying ? playMusic() : pauseMusic();
  };

  const handleSkipNextClick = () => {
    pauseMusic();
    playNextMusic();
  };

  const playMusic = () => {
    let randomMusicNumber = Math.floor(
      Math.random() * (musicList.length - 0) + 0
    );
    setCurrentMusicNum(randomMusicNumber);
    stream = new Audio(`/music/${musicList[randomMusicNumber]}`);
    stream.play();
    setPlaying(true);
    setMusicName(musicList[randomMusicNumber]);
  };

  const playNextMusic = () => {
    // Play the music that is pointed by currentMusicNum
    stream = new Audio(`/music/${musicList[currentMusicNum]}`);
    stream.play();
    setPlaying(true);
    setMusicName(musicList[currentMusicNum]);

    // And after that set the currentMusicNum to the next value
    if (currentMusicNum + 1 < musicList.length) {
      setCurrentMusicNum(currentMusicNum + 1);
    } else {
      setCurrentMusicNum(0);
    }
  };

  const pauseMusic = () => {
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
        <Toolbar variant="dense">
          <Typography variant="body2">
            {`${Strings.NOW_PLAYING} ${musicName}`}
          </Typography>
          <Fab
            color="secondary"
            aria-label="play"
            className={classes.playFabButton}
            onClick={handlePlayClick}
          >
            {currentButton()}
          </Fab>
          <Fab
            color="secondary"
            size="small"
            aria-label="skip-next"
            className={classes.nextFabButton}
            onClick={handleSkipNextClick}
          >
            <SkipNextIcon />
          </Fab>
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
  playFabButton: {
    position: "absolute",
    zIndex: 1,
    top: -70,
    right: 60,
  },
  nextFabButton: {
    position: "absolute",
    zIndex: 1,
    top: -61,
    right: 12,
  },
}));
