// import React from "react";

// function Home() {
//   return (
//     <div>
//       <h2>Enter To Home pageeee </h2>
//     </div>
//   );
// }

// export default ;
import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [tasks, setTasks] = useState([]);

  // Add new task
  const addTodo = () => {
    if (taskName && taskDescription) {
      const newTask = {
        id: Date.now(),
        name: taskName,
        description: taskDescription,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTaskName('');
      setTaskDescription('');
    } else {
      alert('Please enter both task name and description.');
    }
  };

  // Mark task as completed
  const completeTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: true } : task
    ));
  };

  // Delete task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="container">
      <h1>My Todos</h1>
      <div className="input-section">
        <input 
          type="text" 
          placeholder="Name" 
          value={taskName} 
          onChange={(e) => setTaskName(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Description" 
          value={taskDescription} 
          onChange={(e) => setTaskDescription(e.target.value)} 
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <strong>{task.name}</strong>: {task.description}
            <button className="complete" onClick={() => completeTask(task.id)}>Complete</button>
            <button className="delete" onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
