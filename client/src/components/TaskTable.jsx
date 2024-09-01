// src/components/TaskTable.js
import React from 'react';
import TaskRow from './TaskRow';

const TaskTable = ({ tasks, onDelete, onStatusChange }) => {
  return (
    <table className="table-auto w-full border-collapse border border-gray-200">
      <thead>
        <tr>
          <th className="border border-gray-300 p-2">Sl No.</th>
          <th className="border border-gray-300 p-2">Task Name</th>
          <th className="border border-gray-300 p-2">Deadline</th>
          <th className="border border-gray-300 p-2">Status</th>
          <th className="border border-gray-300 p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => (
          <TaskRow
            key={task.id}
            task={task}
            onDelete={onDelete}
            onStatusChange={onStatusChange}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;
