// src/components/TaskStatusDropdown.js
import React from 'react';

const TaskStatusDropdown = ({ status, onStatusChange }) => {
  const handleChange = (event) => {
    onStatusChange(event.target.value);
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'Complete':
        return 'bg-green-100 text-green-700';
      case 'Ongoing':
        return 'bg-yellow-100 text-yellow-700';
      case 'Incomplete':
      default:
        return 'bg-red-100 text-red-700';
    }
  };

  return (
    <select
      className={`w-full p-1 rounded border border-gray-300 ${getStatusClass(status)} hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500`}
      value={status}
      onChange={handleChange}
    >
      <option value="Incomplete">Incomplete</option>
      <option value="Ongoing">Ongoing</option>
      <option value="Complete">Complete</option>
    </select>
  );
};

export default TaskStatusDropdown;
