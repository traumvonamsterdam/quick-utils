import React from "react";
import { Button } from "reactstrap";
import { useStateValue } from "../../state-management/GlobalState";
import { fetchWeather } from "../../common/fetchData";
import WeatherForecast from "./WeatherForecast";

export default () => {
  const { weather, dispatch } = useStateValue();

  return (
    <>
      <Button onClick={fetchWeather.bind(null, dispatch)}>Refresh</Button>
      <WeatherForecast />
    </>
  );
};
