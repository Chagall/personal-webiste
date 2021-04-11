/* eslint-disable react/prop-types */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import IconButton from "@material-ui/core/IconButton";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import GitHubIcon from "@material-ui/icons/GitHub";
import Typography from "@material-ui/core/Typography";
import Constants from "./utils/Constants";

const useStyles = makeStyles((theme) => ({
  buttonGroupContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(1),
  },
}));

export default function ProjectCard({
  title,
  imgSrc,
  description,
  githubPage,
  website,
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

        <div className={styles.buttonGroupContainer}>
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
          >
            <IconButton
              style={{ display: website ? "inline-block" : "none" }}
              aria-label="website"
              onClick={() => {
                window.open(website);
              }}
            >
              <OpenInNewIcon />
            </IconButton>

            <IconButton
              aria-label="github-project"
              onClick={() => {
                window.open(Constants.GITHUB_PAGE_URL + githubPage);
              }}
            >
              <GitHubIcon />
            </IconButton>
          </ButtonGroup>
        </div>
      </CardContent>
    </Card>
  );
}
