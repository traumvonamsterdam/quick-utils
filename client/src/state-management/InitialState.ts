import Utils from "../common/Utils";

export default {
  // Do not need to send these to backend
  displayMsg: [false, "No messages to display."],
  msg: "No messages.",
  userInfo: {
    name: "Guest"
  },
  selectedTab: Utils[0],
  weather: null,
  datePicked: new Date(),

  // Send these to backend
  loggedIn: false,
  events: [],
  tasks: [
    // { id: 1, content: "Vacuum bedroom" },
    // { id: 2, content: "Finish weather util" }
  ],
  theme: "dark"
};
