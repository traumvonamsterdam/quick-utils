const express = require("express");

// mergeParams enables access to req.params
const router = express.Router({ mergeParams: true });

// Dummy data list of users with events
const dummyUserEvents = require("./user-events");

router.get("/users/:name/:month", (req, res) => {
  let events = [];
  const { name, month } = req.params;

  const user = dummyUserEvents.find(user => {
    return user.name == name;
  });

  if (user && user.events) {
    events = user.events.filter(event => {
      return event.month == month;
    });
  }

  res.json({ events });
});

router.get("/users/:name", (req, res) => {
  let events = [];
  const { name, month } = req.params;

  const user = dummyUserEvents.find(user => {
    return user.name == name;
  });

  res.json({ events: user.events });
});

router.get("/*", (req, res) => {
  res.json({
    msg: "Api route not found."
  });
});

module.exports = router;
