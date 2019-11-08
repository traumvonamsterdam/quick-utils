const express = require("express");
const router = express.Router();
const {
  createTask,
  getTasks,
  reorderTasks,
  deleteTask
} = require("../dbLogic/taskLogic");

router.post("/submit-task", async (req, res, next) => {
  const { tasks, taskName, date } = req.body.data;
  await createTask({ tasks, taskName, date });
  res.json(taskName);
});

router.get("/get-tasks", async (req, res) => {
  const tasks = await getTasks();
  res.json(tasks);
});

router.patch("/reorder-tasks", async (req, res) => {
  const tasks = req.body.tasks;
  await reorderTasks({ tasks });
  res.json(tasks);
});

router.patch("/delete-task/", async (req, res) => {
  const { tasks, taskToDelete } = req.body;
  await deleteTask({ tasks, taskToDelete });
  res.json(taskToDelete);
});

module.exports = router;
