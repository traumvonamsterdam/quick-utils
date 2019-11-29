import { Task, State, Action } from "../interfaces";

// Object literal for updating the state

interface StateUpdate {
  [key: string]: [string, string];
}

const stateUpdate: StateUpdate = {
  changeUserInfo: ["userInfo", "userInfo"],
  switchTab: ["selectedTab", "selectedTab"],
  displayMsg: ["displayMsg", "value"],
  updateWeather: ["weather", "weather"],
  updateEvents: ["events", "events"],
  changeDate: ["datePicked", "newDate"],
  updateTasks: ["tasks", "tasks"],
  changeTheme: ["theme", "newTheme"]
};

export default (state: State, action: Action) => {
  const checkForExceptions = () => {
    // Update order when tasks are changed
    if (action.type === "updateTasks") {
      const { tasks } = action;

      // Reorder tasks whenever tasks are changed
      const reorderedTasks = tasks.sort((a: Task, b: Task) => {
        return a.order < b.order;
      });
      return { ...state, tasks: reorderedTasks };
    }
  };

  checkForExceptions();

  // Update and return new state

  if (action.type in stateUpdate) {
    const newState = { ...state };
    const [a, b] = stateUpdate[action.type];

    if (a in newState && b in action) {
      newState[a] = action[b];
      return newState;
    }
  }

  return state;
};
