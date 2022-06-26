import { useState, useEffect } from "react";
import TaskCreator from "./components/TaskCreator";
import TaskTable from "./components/TaskTable";
import VisibilityControl from "./components/VisibilityControl";
import "./App.css";

function App() {
  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowcompleted] = useState(false);

  function createNewTask(taskName) {
    if (!taskItems.find((task) => task.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  }

  function toggleTask(task) {
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  }

  const cleanTasks = () => {
    setTaskItems(taskItems.filter((task) => !task.done));
    setShowcompleted(false);
  };

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  return (
    <div className="bg-dark vh-100 text-white">
      <div className="container p-4 col-md-6 offset-md-4">
        <TaskCreator 
          createNewTask={createNewTask}>
        </TaskCreator>
        
        <TaskTable 
          tasks={taskItems} 
          toggleTask={toggleTask}>
        </TaskTable>

        <VisibilityControl
          isChecked={showCompleted}
          setShowcompleted={(checked) => setShowcompleted(checked)}
          cleanTasks={cleanTasks}
        ></VisibilityControl>
            
        {
          showCompleted === true && (
          <TaskTable
            tasks={taskItems}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
            texto=' Done'
            >
          </TaskTable>
        )}
      </div>
    </div>
  );
}

export default App;
              
