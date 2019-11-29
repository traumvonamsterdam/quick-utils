import axios from "axios";
import port_config from "../port-config";

const PORT = port_config.PORT;

const name = "John";

export default () => {
  const getRequest = async () => {
    const data = await axios.get(`http://${PORT}/users/${name}/asdf`);
    console.log("sending to backend...");
  };
  getRequest();
};
