import React from "react";
import { Button } from "reactstrap";
import { useStateValue } from "../GlobalState";
import { fetchWeather } from "../fetchData";

export default () => {
  const dispatch = useStateValue()[1];

  return (
    <Button onClick={fetchWeather.bind(null, dispatch)}>Get Weather</Button>
  );
};
