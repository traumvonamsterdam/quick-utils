const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

const createTask = async ({ id, taskName, date }) => {
  const task = new Task({
    id,
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

  res.json(tasks);
});

module.exports = router;
