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

export const deleteTask = (dispatch, { _id }) => {
  axios
    .delete(`http://${apiRoute}/tasks/delete-task/${_id}`)
    .then(res => {
      fetchTasks(dispatch);
    })
    .catch(err => {
      dispatch({
        type: "displayMsg",
        value: [true, "Failed to delete task."]
      });
    });
};
