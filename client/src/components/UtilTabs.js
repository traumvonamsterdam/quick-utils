import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import useReactRouter from "use-react-router";
import Calendar from "./Calendar";
import TaskList from "./TaskList";
import Preferences from "./Preferences";
import { useStateValue } from "../GlobalState";
import utils from "../utils";
import "react-tabs/style/react-tabs.css";

const UtilTabs = () => {
  const { history, location, match } = useReactRouter();
  const initTabIndex = utils.indexOf(location.pathname.slice(1));
  const [currentTabIndex, setCurrentTabIndex] = useState(initTabIndex);

  const onSelect = tabIndex => {
    history.push(`/${utils[tabIndex]}`);
    setCurrentTabIndex(tabIndex);
  };

  return (
    <Tabs onSelect={onSelect} selectedIndex={currentTabIndex}>
      <TabList>
        <Tab>Calendar</Tab>
        <Tab>Task List</Tab>
        <Tab>Preferences</Tab>
      </TabList>

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
