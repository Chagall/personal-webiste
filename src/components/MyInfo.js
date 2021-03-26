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
  const styles = useStyles();

  return (
    <Card raised className={styles.root}>
      <CardMedia
        className={styles.media}
        image="/images/memyselfandyoda.jpg"
        title="Contemplative Reptile"
      />

      <CardContent className={styles.content}>
        <Typography variant="h4" color="textPrimary" paragraph align="left">
          {Strings.PRESENTATION}
          <img
            src="https://emoji.gg/assets/emoji/Mario.png"
            width="22px"
            height="22px"
            alt="Mario"
          />
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          {Strings.I_AM_A}
          <a href="https://www.linkedin.com/in/fabio-alves-martins-pereira/">
            <code>{Strings.FRONT_ENGINEER}</code>
          </a>
          {Strings.WHO_ALSO_KNOWS}
          <a href="https://github.com/Chagall/fake-servers">
            <code>{Strings.BACKEND}</code>
          </a>
          {Strings.AND}
          <a href="https://github.com/Chagall/notification-listener-service-example">
            <code>{Strings.ANDROID_DEV}</code>
          </a>
          .
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          {Strings.DESCRIPTION2}
          <span style={textThrough}>shit</span> posting
          {Strings.DESCRIPTION3}
        </Typography>

        <div className={styles.socials}>
          <IconButton
            color="primary"
            onClick={() => {
              window.open("https://github.com/chagall");
            }}
            aria-label="github"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="primary"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/fabio-alves-martins-pereira/"
              );
            }}
            aria-label="linkedin"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            color="primary"
            onClick={() => {
              window.open("https://twitter.com/famprogrammer42");
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
  content: {
    flex: "1 0 auto",
  },
  media: {
    width: 300,
    height: 256,
  },
  socials: {
    marginTop: theme.spacing(4),
    textAlign: "center",
  },
}));

const textThrough = {
  textDecoration: "line-through",
};
