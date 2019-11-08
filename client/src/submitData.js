import axios from "axios";
import port_config from "./port-config";
import { apiKey } from "./config";
import { fetchTasks } from "./fetchData";

const PORT = port_config.PORT;

const apiRoute = "localhost:4000";

export const submitTask = (dispatch, { data }) => {
  // Add task in db then refetch
  axios
    .post(`http://${apiRoute}/tasks/submit-task`, {
      data
    })
    .then(res => {
      fetchTasks(dispatch);
    })
    .catch(err => {
      dispatch({
        type: "displayMsg",
        value: [true, "Failed to submit task."]
      });
    });
};

export const updateTaskOrder = (dispatch, { reorderedTasks }) => {
  // Update frontend
  dispatch({ type: "updateTasks", tasks: reorderedTasks });
  // Update database
  axios.patch(`http://${apiRoute}/tasks/reorder-tasks/`, {
    tasks: reorderedTasks
  });
};

export const deleteTask = (dispatch, { tasks, taskToDelete }) => {
  // Delete task in db then refetch
  axios
    .patch(`http://${apiRoute}/tasks/delete-task/`, {
      tasks,
      taskToDelete
    })
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
