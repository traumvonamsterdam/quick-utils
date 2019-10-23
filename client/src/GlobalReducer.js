export default (state, action) => {
  // Object literal for updating the state
  const stateUpdate = {
    changeUserInfo: ["userInfo", "userInfo"],
    switchTab: ["selectedTab", "selectedTab"],
    updateMsg: ["msg", "msg"],
    updateWeather: ["weather", "weather"],
    updateEvents: ["events", "events"],
    changeDate: ["datePicked", "newDate"],
    updateTasks: ["tasks", "tasks"],
    changeTheme: ["theme", "newTheme"]
  };

  // Update and return new state
  if (stateUpdate[action.type]) {
    const newState = { ...state };
    const [a, b] = stateUpdate[action.type];
    newState[a] = action[b];
    return newState;
  }
  return state;

  switch (action.type) {
    // General info
    case "changeUserInfo":
      return { ...state, userInfo: action.userInfo };
    case "switchTab":
      return { ...state, selectedTab: action.selectedTab };
    case "updateMsg":
      return { ...state, msg: action.msg };

    // Weather tab
    case "updateWeather":
      return { ...state, weather: action.weather };

    // Calendar tab
    case "updateEvents":
      return { ...state, events: action.events };
    case "changeDate":
      return { ...state, datePicked: action.newDate };

    // Tasks tab
    case "updateTasks":
      return { ...state, tasks: action.tasks };

    // Preferences tab
    case "changeTheme":
      return { ...state, theme: action.newTheme };
    default:
      return state;
  }
};
