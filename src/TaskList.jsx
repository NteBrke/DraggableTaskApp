import { useState } from 'react';

function TaskList({ tasks, setTasks }) {
  const [draggedTask, setDraggedTask] = useState(null);

  const handleDragStart = (index) => {
    setDraggedTask(index);
  };

  const handleDragOver = (index) => {
    if (draggedTask === null) return;
    const updatedTasks = [...tasks];
    const task = updatedTasks.splice(draggedTask, 1)[0];
    updatedTasks.splice(index, 0, task);
    setDraggedTask(index);
    setTasks(updatedTasks);
  };

  return (
    <ul className='bg-gray-700 p-4 rounded-lg'>
      {tasks.map((task, index) => (
        <li
          key={task.id}
          className='p-2 bg-gray-600 my-2 rounded-lg cursor-pointer'
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={() => handleDragOver(index)}
        >
          {task.text}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
