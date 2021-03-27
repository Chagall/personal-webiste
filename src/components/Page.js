import React, { useEffect, useState } from "react";
import HorizontalInfoCard from "./HorizontalInfoCard";
import VerticalInfoCard from "./VerticalInfoCard";

export default function Page() {

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
  const [info, setInfo] = useState(<HorizontalInfoCard />);
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

  return <div style={smallScreen}>{info}</div>;
}



const smallScreen = {
  textAlign: "center",
  margin: "0 auto",
};
