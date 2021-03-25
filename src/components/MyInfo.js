import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import Strings from "./utils/Strings";

export default function MyInfo() {
  const classes = useStyles();

  return (
    <Card raised>
      <CardMedia
        className={classes.media}
        image="/images/memyselfandyoda.jpg"
        title="Contemplative Reptile"
      />
      <CardContent className={classes.root}>
        <Typography variant="h5" color="textPrimary" paragraph align="left">
          {Strings.PRESENTATION}
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          paragraph
          align="center"
        >
          {Strings.DESCRIPTION}
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          paragraph
          align="center"
        >
          {Strings.DESCRIPTION2}
        </Typography>

        <div className={classes.socials}>
          <IconButton
            color="primary"
            onClick={() => {
              window.location.href = "https://github.com/chagall";
            }}
            aria-label="github"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="primary"
            onClick={() => {
              window.location.href =
                "https://www.linkedin.com/in/fabio-alves-martins-pereira/";
            }}
            aria-label="linkedin"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            color="primary"
            onClick={() => {
              window.location.href = "https://twitter.com/famprogrammer42";
            }}
            aria-label="twitter"
          >
            <TwitterIcon />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles({
  root: {
    paddingBottom: "-2vh"
  },
  media: {
    height: 326,
  },
  socials: {
    textAlign: "center",
  },
});