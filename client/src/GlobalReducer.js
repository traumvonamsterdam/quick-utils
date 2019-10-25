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
  // Update and return new state
  if (stateUpdate[action.type]) {
    const newState = { ...state };
    const [a, b] = stateUpdate[action.type];
    if (newState[a] && action[b]) {
      newState[a] = action[b];
      return newState;
    }
  }
  return state;
};
