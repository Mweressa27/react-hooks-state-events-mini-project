import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS)
const [selectedCategory, setSelectedCategory] = useState("All")

const handleCategoryChange = (category) => {
  setSelectedCategory(category)
}

const handleTaskDelete = (textToDelete) => {
  setTasks(tasks.filter(task => task.text !== textToDelete))
}

const handleAddTask = (newTask) => {
  setTasks([...tasks, newTask])
}

const visibleTasks = tasks.filter(task =>
  selectedCategory === "All" || task.category === selectedCategory
)
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategoryChange} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
      <TaskList tasks={visibleTasks} onDeleteTask={handleTaskDelete} />
    </div>
  );
}

export default App;
