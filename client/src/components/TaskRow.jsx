// src/components/TaskRow.js
import React from 'react';
import TaskStatusDropdown from './TaskStatusDropdown';

const TaskRow = ({ task, onDelete, onStatusChange }) => {
  return (
    <tr>
      <td className="border border-gray-300 p-2">{task.id}</td>
      <td className="border border-gray-300 p-2">{task.name}</td>
      <td className="border border-gray-300 p-2">{task.deadline}</td>
      <td className="border border-gray-300 p-2">
        <TaskStatusDropdown status={task.status} onStatusChange={(status) => onStatusChange(task.id, status)} />
      </td>
      <td className="border border-gray-300 p-2">
        <button
          className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TaskRow;
