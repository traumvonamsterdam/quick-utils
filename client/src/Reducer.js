export default (state, action) => {
  switch (action.type) {
    case "switchTab":
      return {
        ...state,
        selectedTab: action.selectedTab
      };
    case "changeTheme":
      return {
        ...state,
        theme: action.newTheme
      };

    case "changeDate":
      return {
        ...state,
        datePicked: action.newDate
      };

      case "updateEvents":
        return {
          ...state,
          events: action.events
        };

    default:
      return state;
  }
};
