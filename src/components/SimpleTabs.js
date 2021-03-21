import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import HomeIcon from "@material-ui/icons/Home";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import MediaControlCard from "./MediaControlCard";
import AppBar from "@material-ui/core/Appbar";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          centered
          aria-label="icon label tabs example"
        >
          <Tab icon={<HomeIcon />} label="Home" {...a11yProps(0)} />
          <Tab icon={<LocalLibraryIcon />} label="Blog" {...a11yProps(2)} />
          <Tab icon={<AccountTreeIcon />} label="Projects" {...a11yProps(3)} />
          <Tab icon={<PersonPinIcon />} label="Links" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Typography variant="h3" align="center">Welcome to my home!</Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant="h6">Welcome to my blog!</Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography variant="h6">
          Here you can check out my latest projects!
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography variant="h6" align="center">
          You can find me on these social medias below
        </Typography>

        <MediaControlCard
          imgSrc="/images/linkedin.png"
          imgTitle="Linkedin"
          musicName="In the Linkedin"
          musicAuthor="Linkin Fábio"
          url="https://www.linkedin.com/in/fabio-alves-martins-pereira/"
        />

        <MediaControlCard
          imgSrc="/images/github.png"
          imgTitle="Github"
          musicName="Welcome to the Github"
          musicAuthor="Guns and Fábios"
          url="https://github.com/Chagall"
        />

        <MediaControlCard
          imgSrc="/images/twitter.png"
          imgTitle="Twitter"
          musicName="Sultans of Twitter"
          musicAuthor="Dire Fábios"
          url="https://twitter.com/famprogrammer42"
        />
      </TabPanel>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
