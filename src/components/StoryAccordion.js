import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(16),
  },
  details: {
    display: "flex",
    flexDirection: "row",
  },
}));

export default function StoryAccordion() {
  const styles = useStyles();

  return (
    <Accordion className={styles.root}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel-content"
        id="panel-header"
        classNames={styles.summary}
      >
        <Typography variant="h5" color="textPrimary" align="center">
          My story so far...
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={styles.details}>
        <div>
          <Typography color="textSecondary" align="left" paragraph>
            I first got into computer stuff at the end of the 90’s, when my
            father upgraded his computer from a{" "}
            <a
              href="https://en.wikipedia.org/wiki/Windows_95"
              target="_blank"
              rel="noopener noreferrer"
            >
              <code>Windows 95</code>
            </a>{" "}
            to a master race{" "}
            <a
              href="https://en.wikipedia.org/wiki/Windows_98"
              target="_blank"
              rel="noopener noreferrer"
            >
              <code>Windows 98</code>
            </a>
            . The technician responsible for the delivery made a bad decision of
            installing{" "}
            <a
              href="https://en.wikipedia.org/wiki/Diablo_%28video_game%29"
              target="_blank"
              rel="noopener noreferrer"
            >
              <code>Diablo</code>
            </a>{" "}
            alongside the programs that my father needed. Well you can guess how
            much this little kid’s brain melt when he first booted that copy of
            Diablo and saw those graphics 🤯.
          </Typography>
          <Typography color="textSecondary" align="left" paragraph>
            Fast forward to the beginning of high school, I first learned about{" "}
            <code>coding</code> when me and a few buddies decided to host our on{" "}
            <a
              href="https://tibia.fandom.com/wiki/Open_Tibia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <code>private Tibia server</code>
            </a>
            . We had to mess with a couple of{" "}
            <a
              href="https://www.lua.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <code>Lua scripts</code>
            </a>{" "}
            to create/edit quests, monsters and game events. We had no idea we
            were programming back then, but it was fun.
          </Typography>
          <Typography color="textSecondary" align="left" paragraph>
            A couple years later, at the end of high school, I was presented
            with the life changing question of what career I wanted to pursue. I
            was never good at math and physics, so even though I enjoyed
            computers I didn’t think I was smart enough for that kind of stuff.
            That insecurity lead me to start a{" "}
            <code>bachelor’s degree in law</code>.
          </Typography>
          <Typography color="textSecondary" align="left" paragraph>
            Halfway through my degree I was unsatisfied. I wasn’t doing bad, but
            I didn’t enjoy any of the classes. One day while talking to a friend
            (one of those who helped build that Tibia server) I came to the
            conclusion that law was definitely not what I wanted to work with. I
            liked computers and games, that was what I was supposed to be doing.
            So not only did I quit the university I was in, but I also aimed
            high. I wanted to study computer science, but not anywhere, I wanted
            to join the best university my hands could grasp.
          </Typography>
          <Typography color="textSecondary" align="left" paragraph>
            I studied hard and got accepted at{" "}
            <a
              href="https://pt.wikipedia.org/wiki/Universidade_de_S%C3%A3o_Paulo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <code>Universidade de São Paulo (USP)</code>
            </a>
            , which is regarded as the best university in Brazil. There I
            studied{" "}
            <a
              href="https://en.wikipedia.org/wiki/Computer_science"
              target="_blank"
              rel="noopener noreferrer"
            >
              <code>Computer Science</code>
            </a>
            , had to deal with calculus, probabilities, differential equations
            and all of that stuff. I’m not gonna lie, it was pretty hard for a
            dude who had been studying law to grasp all of those concepts. But,
            not only did I prove myself wrong, that I could indeed deal with
            math and physics, but also that I could also do it at supposedly the
            hardest university there could be.
          </Typography>
          <Typography color="textSecondary" align="left" paragraph>
            I met a lot of great people at the university, had the experience of
            living far away from home (700 km!) and taking{" "}
            <span style={textThrough}>good</span> care of myself. The climb was
            hard, salty, with a lot of rocks, (still is tbh, see 2020 lol), but
            it’s being worth every minute of discovery, growth and banging my
            head against the keyboard when the code doesn&apos;t compile. Well,
            as far as I can remember and summarize my personal life, that’s my
            story so far…
          </Typography>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

const textThrough = {
  textDecoration: "line-through",
};
