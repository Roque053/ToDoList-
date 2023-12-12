import React, { useState } from 'react';

const FormTask = ({ handleAdd }) => {
  const [newTask, setNewTask] = useState('');
  const [newSubTask, setNewSubTask] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '' && newSubTask.trim() !== '' && date.trim() !== '' && time.trim() !== '') {
      const fullTask = `${newTask} - ${newSubTask} - Descripción: ${description} - Fecha: ${date} - Hora: ${time}`;
      handleAdd(fullTask);
      setNewTask('');
      setNewSubTask('');
      setDescription('');
      setDate('');
      setTime('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-600 flex flex-col items-center p-4 space-y-4">
      <input
        className="text-center p-2 bg-gray-700 text-white rounded"
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Nueva tarea"
      />
      <input
        className="text-center p-2 bg-gray-700 text-white rounded"
        type="text"
        value={newSubTask}
        onChange={(e) => setNewSubTask(e.target.value)}
        placeholder="Sub tarea"
      />
      <input
        className="text-center p-2 bg-gray-700 text-white rounded"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descripción"
      />
      <input
        className="text-center p-2 bg-gray-700 text-white rounded"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        className="text-center p-2 bg-gray-700 text-white rounded"
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button type="submit" className="p-2 bg-gray-700 text-white rounded">
        Agregar Tarea
      </button>
    </form>
  );
};

export default FormTask;
