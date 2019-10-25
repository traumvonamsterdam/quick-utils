import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "reactstrap";
import { useStateValue } from "../GlobalState";
import { apiKey } from "./config";

export default () => {
  const [{ weatherLoaded }, dispatch] = useStateValue();
  const [weatherUrl, setWeatherUrl] = useState("");

  const getWeather = async () => {
    const res = await axios.get(weatherUrl + "1").catch(err => {
      // Display error if weather fetching fails
      dispatch({
        type: "displayMsg",
        value: [true, "Failed to fetch weather data."]
      });
    });
    if (res) {
      const { main, weather, wind } = res.data;
      const weatherData = { main, weather, wind };
      // console.log(weatherData);
      dispatch({ type: "updateWeather", weather: weatherData });
    }
  };

  useEffect(() => {
    let lat, lng;
    const geoSuccess = position => {
      lat = position.coords.latitude;
      lng = position.coords.longitude;

      setWeatherUrl(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`
      );
    };
    const geoError = () => {
      console.log("Cannot get geolocation");
    };
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  }, []);

  useEffect(() => {
    if (weatherUrl && !weatherLoaded) {
      getWeather();
    }
  }, [weatherUrl]);
  // axios
  //   .get(url)
  //   .then(res => {
  //     console.log(res.data);
  //   })
  //   .then(dispatch({ type: "weatherLoaded" }))
  //   .catch(err => {
  //     console.log(err);
  //   });

  return <Button onClick={getWeather}>Get Weather</Button>;
};
