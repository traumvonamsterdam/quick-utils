import React, { useState, useEffect } from "react";
import { Fade } from "reactstrap";
import { useStateValue } from "../GlobalState";

export default () => {
  const [{ displayMsg }, dispatch] = useStateValue();
  const [fadeIn, setFadeIn] = useState(false);

  const [bool, msg] = displayMsg;
  useEffect(() => {
    if (bool && msg) {
      dispatch({ type: "displayMsg", value: [false, msg] });
      setFadeIn(true);
      setTimeout(() => {
        setFadeIn(false);
      }, 4000);
    }
  }, [bool, msg]);

  return (
    <Fade
      in={fadeIn}
      tag="h5"
      className="mt-3"
      style={{ justifyContent: "center", zIndex: 2 }}
    >
      {msg}
    </Fade>
  );
};
