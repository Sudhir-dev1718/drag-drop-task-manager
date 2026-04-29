import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { getTasks, addTask, updateTaskStatus, deleteTask } from "./services/taskService";
import "./App.css";

const COLUMNS = [
  { id: "todo", title: "To Do" },
  { id: "inprogress", title: "In Progress" },
  { id: "done", title: "Done" },
];

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  // Load tasks on startup
  useEffect(() => {
    const fetch = async () => {
      const data = await getTasks();
      setTasks(data);
    };
    fetch();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    const savedTask = await addTask(newTaskTitle); // Call Service
    setTasks([...tasks, savedTask]); // Update UI
    setNewTaskTitle(""); // Clear Input
  };

  const handleDelete = async (id) => {
    try {
        await deleteTask(id); // Delete from Database
        setTasks(tasks.filter(t => t.id !== id)); // Remove from UI screen
    } catch (error) {
        console.error("Could not delete task", error);
    }
};

  const onDragEnd = async (result) => {
    const { destination, source, draggableId } = result;
    if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) return;

    // Optimistic UI update
    const updatedTasks = tasks.map(t => 
        t.id.toString() === draggableId ? { ...t, status: destination.droppableId } : t
    );
    setTasks(updatedTasks);

    // Call Service to update Database
    await updateTaskStatus(draggableId, destination.droppableId);
  };

  return (
    <div className="board-container">
      <h1 className="board-title">Task Management Board</h1>

      <form className="add-task-form" onSubmit={handleCreate}>
        <input 
          value={newTaskTitle} 
          onChange={(e) => setNewTaskTitle(e.target.value)} 
          placeholder="Enter new task..."
        />
        <button type="submit">Add Task</button>
      </form>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="columns-container">
          {COLUMNS.map(col => (
            <div key={col.id} className="column">
              <h2>{col.title}</h2>
              <Droppable droppableId={col.id}>
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef} className="task-list">
                    {tasks.filter(t => t.status === col.id).map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                        {(provided) => (
                          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="task-card">
                            <span>{task.title}</span>
    <button className="delete-btn" onClick={() => handleDelete(task.id)}>×</button>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}

export default App;