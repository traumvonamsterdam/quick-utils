import axios from "axios";
import port_config from "./port-config";
import { apiKey } from "./config";
import { fetchTasks } from "./fetchData";

const PORT = port_config.PORT;

const apiRoute = "localhost:4000";

export const submitTask = (dispatch, { taskName }) => {
  axios
    .post(`http://${apiRoute}/tasks/submit-task`, {
      task: {
        taskName,
        date: ""
      }
    })
    .then(res => {
      // Update task list after fetch
      // console.log(res.data);
      // dispatch({
      //   type: "updateTasks",
      //   tasks: res.data
      // });
      fetchTasks(dispatch);
    })
    .catch(err => {
      // Display error if fetch fails
      dispatch({
        type: "displayMsg",
        value: [true, "Failed to submit task."]
      });
    });
};
