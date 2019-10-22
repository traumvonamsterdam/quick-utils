import React from "react";
import { useStateValue } from "../GlobalState";

export default () => {
  const [{ msg }, dispatch] = useStateValue();

  if (!msg) {
    return null;
  } else {
    return <div>{msg}</div>;
  }
};
