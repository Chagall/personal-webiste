/* eslint-disable react/prop-types */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import Typography from "@material-ui/core/Typography";
import Constants from "./utils/Constants";

const useStyles = makeStyles(() => ({
  actions: {
    textAlign: "center",
  },
}));

export default function ProjectCard({
  title,
  imgSrc,
  description,
  githubPage,
}) {
  const styles = useStyles();

  return (
    <Card>
      <CardMedia
        component="img"
        alt={title}
        height="240"
        image={imgSrc}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" align="center">
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          align="left"
        >
          {description}
        </Typography>

        <div className={styles.actions}>
          <IconButton
            aria-label="github-project"
            color="primary"
            onClick={() => {
              window.open(Constants.GITHUB_PAGE_URL + githubPage);
            }}
          >
            <GitHubIcon />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
}
