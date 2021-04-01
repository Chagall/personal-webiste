import React, { useEffect, useState } from "react";
import HorizontalInfoCard from "./HorizontalInfoCard";
import VerticalInfoCard from "./VerticalInfoCard";
import StoryAccordion from "./StoryAccordion";
import Projects from "./Projects";

export default function Homepage() {
  const getBrowserWindowWidth = () => {
    var windowWidth = 0;
    if (typeof window.innerWidth == "number") {
      //Non-IE
      windowWidth = window.innerWidth;
    } else if (
      document.documentElement &&
      (document.documentElement.clientWidth ||
        document.documentElement.clientWidth)
    ) {
      //IE 6+ in 'standards compliant mode'
      windowWidth = document.documentElement.clientWidth;
    } else if (
      document.body &&
      (document.body.clientWidth || document.body.clientWidth)
    ) {
      //IE 4 compatible
      windowWidth = document.body.clientWidth;
    }
    return windowWidth;
  };

  const setInfoBasedOnBrowserWidth = () => {
    let windowWidth = getBrowserWindowWidth();

    if (currentWidth !== windowWidth) {
      setCurrentWidth(windowWidth);
      if (windowWidth < 750) {
        setInfo(<VerticalInfoCard />);
      } else {
        setInfo(<HorizontalInfoCard />);
      }
    }
  };

  const [currentWidth, setCurrentWidth] = useState(-1);
  let firstRenderInfoCard =
    getBrowserWindowWidth() < 750 ? (
      <VerticalInfoCard />
    ) : (
      <HorizontalInfoCard />
    );
  const [info, setInfo] = useState(firstRenderInfoCard);
  const [intervalID, setIntervalID] = useState(-1);

  useEffect(() => {
    setIntervalID(
      setInterval(() => {
        setInfoBasedOnBrowserWidth();
      }, 1000)
    );

    return function cleanup() {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <div style={containerStyle}>
      {info}
      <StoryAccordion />
      <Projects />
    </div>
  );
}

const containerStyle = {
  paddingTop: "4vh",
  paddingBottom: "12vh",
};
