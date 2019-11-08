const Task = require("../models/Task");

const createTask = async ({ taskName, date }) => {
  await Task.bulkWrite([
    {
      updateMany: {
        filter: {},
        update: { $inc: { order: 1 } }
      }
    },
    {
      insertOne: {
        document: {
          taskName,
          date,
          order: 0
        }
      }
    }
  ]);
};

const getTasks = async () => {
  const tasks = await Task.find();

  // Reorder tasks by order
  tasks.sort((a, b) => {
    return a.order > b.order;
  });

  return tasks;
};

const reorderTasks = async ({ tasks }) => {
  const reorderOps = tasks.map(({ _id, order }) => {
    return {
      updateOne: {
        filter: { _id },
        update: { order }
      }
    };
  });

  await Task.bulkWrite(reorderOps);
};

const deleteTask = async ({ tasks, taskToDelete }) => {
  // Reorder remaining tasks
  const reorderOps = tasks
    .filter(task => task.order > taskToDelete.order)
    .map(({ _id, order }) => {
      return {
        updateOne: {
          filter: { _id },
          update: { $inc: { order: -1 } }
        }
      };
    });

  await Task.bulkWrite([
    {
      deleteOne: {
        filter: { _id: taskToDelete._id }
      }
    },
    ...reorderOps
  ]);
};

module.exports = { createTask, getTasks, reorderTasks, deleteTask };
