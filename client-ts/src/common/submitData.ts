import axios from "axios";
import port_config from "../port-config";
// import { apiKey } from "../config";
import { fetchTasks } from "./fetchData";
import { Task } from "../interfaces";

const PORT = port_config.PORT;

const apiRoute = "localhost:4000";

export const submitTask = (dispatch: any, input: { data: any }) => {
  // Add task in db then refetch
  axios
    .post(`http://${apiRoute}/tasks/submit-task`, {
      data: input.data
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

export const updateTaskOrder = (
  dispatch: any,
  input: { reorderedTasks: Task[] }
) => {
  // Update frontend
  dispatch({ type: "updateTasks", tasks: input.reorderedTasks });
  // Update database
  axios.patch(`http://${apiRoute}/tasks/reorder-tasks/`, {
    tasks: input.reorderedTasks
  });
};

export const deleteTask = (
  dispatch: any,
  input: { tasks: Task[]; taskToDelete: Task }
) => {
  // Delete task in db then refetch
  axios
    .patch(`http://${apiRoute}/tasks/delete-task/`, {
      tasks: input.tasks,
      taskToDelete: input.taskToDelete
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
