import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/FormTask';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log('Lista de tareas actualizada:', tasks);
  }, [tasks]);

  const handleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleAdd = (newTask, newSubTask) => {
    const newTaskObject = {
      id: tasks.length + 1,
      name: newTask,
      subTask: newSubTask,
      completed: false,
    };
    setTasks([...tasks, newTaskObject]);
  };

  return (
    <div className="flex">      
      <div className="w-1/2 p-4">
        <h1 className="text-6xl text-slate-700 text-center text-dashboard  mb-8">Agregar Tarea</h1>
        <TaskForm handleAdd={handleAdd} />
      </div>     
      <div className="w-1/2 p-4">
        <h1 className="text-6xl text-slate-700 text-center mb-8">Tareas</h1>
        <TaskList tasks={tasks} handleComplete={handleComplete} handleDelete={handleDelete} />
      </div>
    </div>
  );
};

export default App;
