
import React from "react";
import TaskStatusDropdown from "./TaskStatusDropdown";

const TaskRow = ({ task, onDelete, onStatusChange, index }) => {
  const formatDate = (isoString) => {
    return isoString.split("T")[0];
  };

  return (
    <tr>
      <td className="border border-gray-300 p-2 whitespace-nowrap">{index}</td>
      <td className="border border-gray-300 p-2 truncate max-w-xs">
        {task.taskName}
      </td>
      <td className="border border-gray-300 p-2 whitespace-nowrap">
        {formatDate(task.deadline)}
      </td>
      <td className="border border-gray-300 p-2 whitespace-nowrap min-w-[150px]">
        <TaskStatusDropdown
          task={task}
          status={task.status}
          onStatusChange={onStatusChange}
        />
      </td>
      <td className="border border-gray-300 p-2 whitespace-nowrap">
        <button
          className="bg-red-400 text-white py-1 px-3 rounded hover:bg-red-600"
          onClick={() => onDelete(task._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TaskRow;
