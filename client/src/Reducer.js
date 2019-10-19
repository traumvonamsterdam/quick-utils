export default (state, action) => {
  switch (action.type) {
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
