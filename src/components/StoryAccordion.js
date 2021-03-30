import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function StoryAccordion() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
          classNames={styles.summary}
        >
          <Typography variant="h5" color="textPrimary" align="left">
            How I got into programming
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.details}>
          <div>
            <Typography color="textSecondary" align="justify" paragraph>
              I first got into computers at the age of 8 (In 1998/1999 I think),
              when my father upgraded his computer from a{" "}
              <a
                href="https://en.wikipedia.org/wiki/Windows_95"
                target="_blank"
                rel="noopener noreferrer"
              >
                <code>Windows 95</code>
              </a>{" "}
              to a{" "}
              <a
                href="https://en.wikipedia.org/wiki/Windows_98"
                target="_blank"
                rel="noopener noreferrer"
              >
                <code>Windows 98</code>
              </a>
              . The person who built the PC knew that my dad had children, and
              decided to install a couple of games before handing it over. One
              of them being{" "}
              <a
                href="https://en.wikipedia.org/wiki/Diablo_%28video_game%29"
                target="_blank"
                rel="noopener noreferrer"
              >
                <code>Diablo</code>
              </a>{" "}
              . Well you can guess how much this little kid’s brain melt when he
              first booted that copy of Diablo and saw those graphics 🤯. It was
              love at first sight.
            </Typography>
            <Typography color="textSecondary" align="justify" paragraph>
              Fast forward to the beginning of high school, I first learned
              about <code>programming</code> when me and a few friend who used
              to play{" "}
              <a
                href="https://tibia.fandom.com/wiki/Open_Tibia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <code>Tibia</code>
              </a>
              , a fairly popular game at the time, decided to host our on{" "}
              <a
                href="https://tibia.fandom.com/wiki/Open_Tibia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <code>private server</code>
              </a>{" "}
              of the game. We had to mess with a couple of{" "}
              <a
                href="https://www.lua.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <code>Lua scripts</code>
              </a>{" "}
              to create/edit quests, monsters and game events. We had no idea we
              were programming back then, but it was the purest form of joy.
            </Typography>
            <Typography color="textSecondary" align="justify" paragraph>
              A couple years later, at the end of high school, I was presented
              with the life changing question of what career I wanted to pursue.
              I was never good at math and physics, so even though I enjoyed
              computers I didn’t think I was smart enough to purse a career in{" "}
              <a
                href="https://en.wikipedia.org/wiki/Science,_technology,_engineering,_and_mathematics"
                target="_blank"
                rel="noopener noreferrer"
              >
                <code>STEM</code>
              </a>
              . That lead me to start a <code>bachelor’s degree in law</code>.,
              which was what most people in my school were doing, and what my
              sister and father also did.
            </Typography>
            <Typography color="textSecondary" align="justify" paragraph>
              Halfway through my degree I was unsatisfied. I had one the best
              grades in my class I just couldn&apos;t see myself as being a
              lawyer, public prosecutor, judge or anything like that. One day
              while talking to a friend (one of those who helped build that
              Tibia server) I came to the conclusion that law was definitely not
              what I wanted to work with. I liked computers and games, that was
              what I was supposed to be doing. So before the semester started, I
              decided to quit my university and go back to study to be accepted
              at a computer science course.
            </Typography>
            <Typography color="textSecondary" align="justify" paragraph>
              Since I was giving up on so much I decided to study hard and aim
              at the best university I could get into. That commitment let me to
              be accepted at{" "}
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
              dude who had been studying law to grasp all of those concepts.
              But, not only did I prove myself wrong, that I could indeed deal
              with math and physics, but also that I could also do it at
              supposedly the hardest university there could be.
            </Typography>
            <Typography color="textSecondary" align="justify" paragraph>
              I met a lot of great people at the university, had the experience
              of living far away from home (700 km!) and taking{" "}
              <span style={textThrough}>good</span> care of myself. The climb
              was hard, salty, with a lot of rocks, (still is tbh, see 2020
              lol), but it’s being worth every minute of discovery, growth and
              banging my head against the keyboard when the code doesn&apos;t
              compile.
            </Typography>
            <Typography color="textSecondary" align="justify" paragraph>
              Well, as far as I can remember and summarize, that&apos;s how I
              got into this life of programming and computer science…
            </Typography>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(4),
  },
  details: {
    display: "flex",
    flexDirection: "row",
  },
}));

const textThrough = {
  textDecoration: "line-through",
};
