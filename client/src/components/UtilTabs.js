import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Calendar from "./Calendar";
import ThemeToggle from "./ThemeToggle";

export default () => (
  <Tabs>
    <TabList>
      <Tab>Calendar</Tab>
      <Tab>Task List</Tab>
      <Tab>Preferences</Tab>
    </TabList>

    <TabPanel>
      <Calendar />
    </TabPanel>
    <TabPanel>
      
    </TabPanel>
    <TabPanel>
      <ThemeToggle />
    </TabPanel>
  </Tabs>
);
