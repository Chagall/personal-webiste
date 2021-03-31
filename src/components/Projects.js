import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import ProjectCard from "./ProjectCard";

const useStyles = makeStyles(() => ({
  gridRoot: {
    flexGrow: 1,
  },
  details: {
    flexGrow: 1,
    flexDirection: "column",
  },
}));

export default function Projects() {
  const classes = useStyles();

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5" color="textPrimary" align="left">
            Some personal projects
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.details}>
            <Typography
              variant="body1"
              color="textSecondary"
              align="left"
              paragraph
            >
              Here are a few projects I have been tinkering with lately.
            </Typography>
            <Grid container className={classes.root} spacing={4}>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <ProjectCard
                  title="Intercept Android notifications"
                  imgSrc="./images/notification.jpg"
                  description="An Android app. example to help people understand how you can
                  intercept incoming notifications on Android."
                  githubPage="notification-listener-service-example"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <ProjectCard
                  title="@react-pdf Table Example"
                  imgSrc="./images/react-pdf.png"
                  description="An example of how you can use <View>, <Text> and CSS to build a table inside @react-pdf (Since it's not implemented 💁)."
                  githubPage="notification-listener-service-example"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <ProjectCard
                  title="This website 🤖"
                  imgSrc="./logo512.png"
                  description="This website itself is a personal project I'm building in React.js. My aim is to do it using only functions and react hooks instead of class components."
                  githubPage="personal-webiste"
                />
              </Grid>
            </Grid>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
