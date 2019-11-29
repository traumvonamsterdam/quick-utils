// export interface State {
//   displayMsg: [boolean, string];
//   msg: string;
//   userInfo: object;
//   selectedTab: string;
//   weather: string | null;
//   datePicked: Date;
//   loggedIn: boolean;
//   events: EventEl[];
//   tasks: Task[];
//   theme: string;
// }

interface UserInfo {
  name: string;
  [key: string]: any;
}

export interface State {
  displayMsg: [boolean, string];
  msg: string;
  userInfo: UserInfo;
  selectedTab: string;
  weather: string | null;
  datePicked: Date;
  loggedIn: boolean;
  events: EventEl[];
  tasks: Task[];
  theme: string;
  [key: string]: any;
}

export interface Action {
  type: string;
  [key: string]: any;
}

export interface Task {
  _id: string;
  order: number;
  content: string;
  taskName: string;
}

export interface EventEl {
  id: string | number;
  day: number;
  month: number;
  eventName: string;
  eventType: string;
}
