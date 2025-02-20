import { useState } from 'react';

function AddTaskBtn({ addTask }) {
  const [task, setTask] = useState('');

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleClick() {
    if (task.trim() === '') return;

    addTask(task);
    setTask('');
  }

  return (
    <div className='flex gap-2'>
      <input
        name='newTask'
        value={task}
        onChange={handleChange}
        className='border p-2 rounded w-full bg-gray-700 text-white'
        placeholder='Enter a task...'
      />
      <button
        onClick={handleClick}
        className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'
      >
        Add
      </button>
    </div>
  );
}

export default AddTaskBtn;
