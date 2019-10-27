import React from "react";
import { Button } from "reactstrap";
import { useStateValue } from "../GlobalState";
import { fetchWeather } from "../fetchData";
import WeatherForecast from "./WeatherForecast";

export default () => {
  const [{ weather }, dispatch] = useStateValue();

  return (
    <>
      <Button onClick={fetchWeather.bind(null, dispatch)}>Refresh</Button>
      <WeatherForecast />
    </>
  );
};
