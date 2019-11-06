const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

const createTask = async ({ taskName, date }) => {
  const task = new Task({
    taskName,
    date
  });
  await task.save();
};

router.post("/submit-task", (req, res, next) => {
  const taskName = req.body.task.taskName;

  const date = "";

  const taskData = { taskName, date };
  createTask(taskData);

  res.json(taskName);
});

router.get("/get-tasks", async (req, res) => {
  const tasks = await Task.find();
  tasks.sort((a, b) => {
    return a.order > b.order;
  });
  res.json(tasks);
});

router.patch("/reorder-tasks", async (req, res) => {
  const date = "";

  const tasks = req.body.tasks;

  res.json(tasks);
});

router.delete("/delete-task/:_id", async (req, res) => {
  const _id = req.params._id;

  if (_id) {
    const task = await Task.deleteOne({
      _id
    });
  }

  res.json(_id);
});

module.exports = router;
