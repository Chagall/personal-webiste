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
import Constants from "./utils/Constants";

export default function HorizontalInfoCard() {
  const styles = useStyles();

  return (
    <Card raised className={styles.root}>
      <CardMedia
        className={styles.media}
        image="/images/memyselfandyoda.jpg"
        title="Mememe"
      />

      <CardContent>
        <Typography variant="h4" color="textPrimary" align="left" paragraph>
          {Strings.PRESENTATION}
          <img
            src={Constants.MARIO_EMOJI_URL}
            width="22px"
            height="22px"
            alt="Mario"
          />
        </Typography>
        <Typography variant="body1" color="textSecondary" align="left" paragraph>
          {Strings.I_AM_A}
          <a href={Constants.LINKEDIN_PAGE_URL}>
            <code>{Strings.FRONT_ENGINEER}</code>
          </a>
          {Strings.WHO_ALSO_KNOWS}
          <a href={Constants.GITHUB_PAGE_URL + "fake-servers"}>
            <code>{Strings.BACKEND}</code>
          </a>
          {Strings.AND}
          <a
            href={
              Constants.GITHUB_PAGE_URL +
              "notification-listener-service-example"
            }
          >
            <code>{Strings.ANDROID_DEV}</code>
          </a>
          .
        </Typography>
        <Typography variant="body1" color="textSecondary" align="left" paragraph>
          {Strings.DESCRIPTION2}
          <span style={textThrough}>shit</span> posting
          {Strings.DESCRIPTION3}
        </Typography>

        <div className={styles.socials}>
          <IconButton
            color="primary"
            onClick={() => {
              window.open(Constants.GITHUB_PAGE_URL);
            }}
            aria-label="github"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="primary"
            onClick={() => {
              window.open(Constants.LINKEDIN_PAGE_URL);
            }}
            aria-label="linkedin"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            color="primary"
            onClick={() => {
              window.open(Constants.TWITTER_PAGE_URL);
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

const useStyles = makeStyles((theme) => ({
  root: {
    height: 256,
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  media: {
    width: 300,
    height: 256,
  },
  socials: {
    marginTop: theme.spacing(3),
    textAlign: "center",
  },
}));

const textThrough = {
  textDecoration: "line-through",
};