import React from 'react';

const TaskItem = ({ task, handleComplete, handleDelete }) => {
  const { name, subTask, description, completed } = task;

  return (
    <div className="bg-gray-200 p-4 mb-2 flex flex-col rounded">
      <div className={`flex-shrink-0 ${completed ? 'line-through text-gray-400' : ''}`}>
        <h2 className="text-lg font-bold">{name}</h2>
        <h3 className="text-sm font-medium">{subTask}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="buttons flex justify-around space-x-4 mt-2">
        <button
          onClick={() => handleComplete(task.id)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
        >
          Completar
        </button>
        <button
          onClick={() => handleDelete(task.id)}
          className="bg-red-400 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
