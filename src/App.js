import { useState } from 'react';
import TaskList from './TaskList';
import AddTaskBtn from './AddTask';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Finish coding challenge' },
    { id: 2, text: 'Review JavaScript concepts' },
    { id: 3, text: 'Start a new project' },
  ]);

  // Function to add a new task
  const addTask = (taskText) => {
    if (!taskText.trim()) return;

    const newTask = {
      id: tasks.length + 1, // Simple unique ID
      text: taskText,
    };

    setTasks([...tasks, newTask]); // Update the task list
  };

  return (
    <div className='min-h-screen bg-gray-900 flex flex-col justify-center items-center p-6'>
      <div className='bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md'>
        <h1 className='text-2xl font-bold text-center text-blue-400 mb-4'>
          ✅ Draggable Task List
        </h1>
        <AddTaskBtn addTask={addTask} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default App;
