// Object literal for updating the state
const stateUpdate = {
  changeUserInfo: ["userInfo", "userInfo"],
  switchTab: ["selectedTab", "selectedTab"],
  displayMsg: ["displayMsg", "value"],
  updateWeather: ["weather", "weather"],
  updateEvents: ["events", "events"],
  changeDate: ["datePicked", "newDate"],
  updateTasks: ["tasks", "tasks"],
  changeTheme: ["theme", "newTheme"]
};

export default (state, action) => {
  const checkForExceptions = () => {
    if (action.type === "updateTasks") {
      const { tasks } = action;
      // const reorderedTasks = tasks.sort((a, b) => {
      //   return a.order > b.order;
      // });
      const reorderedTasks = tasks.forEach((task, index) => {
        task.order = index;
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
