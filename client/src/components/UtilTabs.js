import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useHistory, useLocation } from "react-router-dom";

import Weather from "./Weather";
import Calendar from "./Calendar";
import TaskList from "./TaskList";
import Preferences from "./Preferences";
import utils from "../utils";
import "react-tabs/style/react-tabs.css";

const UtilTabs = () => {
  const history = useHistory();
  const location = useLocation();
  const tabIndex = utils.indexOf(location.pathname.slice(1));

  const onSelect = tabIndex => {
    history.push(`/${utils[tabIndex]}`);
  };

  return (
    <Tabs onSelect={onSelect} selectedIndex={tabIndex}>
      <TabList>
        <Tab>Weather</Tab>
        <Tab>Calendar</Tab>
        <Tab>Task List</Tab>
        <Tab>Preferences</Tab>
      </TabList>

      <TabPanel>
        <Weather />
      </TabPanel>
      <TabPanel>
        <Calendar />
      </TabPanel>
      <TabPanel>
        <TaskList />
      </TabPanel>
      <TabPanel>
        <Preferences />
      </TabPanel>
    </Tabs>
  );
};

export default UtilTabs;
