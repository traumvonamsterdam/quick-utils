import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Input, Button } from "reactstrap";
import { useStateValue } from "../GlobalState";
import "../App.css";
import { submitTask } from "../submitData";

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,
  borderRadius: `5px`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  borderRadius: `5px`
  // width: 250
});

const TaskList = () => {
  const [{ tasks }, dispatch] = useStateValue();
  const [newTask, setNewTask] = useState("");

  const onDragEnd = result => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    const reorderedItems = reorder(
      tasks,
      result.source.index,
      result.destination.index
    );

    // const newTasks = Array.from(tasks);

    dispatch({ type: "updateTasks", tasks: reorderedItems });
  };

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  return (
    <>
      <form style={{ display: "flex" }}>
        <Input
          placeholder="New task..."
          style={{ margin: "20px 10px 20px 0" }}
          onChange={e => {
            setNewTask(e.target.value);
          }}
          value={newTask}
        />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={e => {
            const taskName = newTask;
            console.log(taskName);
            e.preventDefault();

            submitTask(dispatch, { taskName });

            // dispatch({
            //   type: "updateTasks",
            //   tasks: [{ id: new Date().getTime(), content: newTask }, ...tasks]
            // });
            // setNewTask("");
          }}
          style={{ margin: "20px 0" }}
        >
          Submit
        </button>
      </form>

      {/* drag and drop task list */}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {tasks.map((item, index) => (
                <Draggable key={item._id} draggableId={item._id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {item.taskName}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

// Put the thing into the DOM!
export default TaskList;
