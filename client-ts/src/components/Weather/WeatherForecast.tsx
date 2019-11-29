import React from "react";
import { useStateValue } from "../../state-management/GlobalState";

const WeatherForecast = () => {
  const {
    weather,
    dispatch
  } = useStateValue();

  // const forecast = weather ? weather.weather[0].main : "asdf";

  return <div>{"placeholder"}</div>;
};

export default WeatherForecast;
