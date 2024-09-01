import React from "react";
import TaskRow from "./TaskRow";

const TaskTable = ({ tasks,onDelete,onStatusChange }) => {


  return (
    <div className="mx-2 sm:mx-4 md:mx-6 lg:mx-8 overflow-x-auto scrollbar  pb-2 lg:pb-0 shadow-inset-light">
      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 whitespace-nowrap">
              Sl No.
            </th>
            <th className="border border-gray-300 p-2 whitespace-nowrap">
              Task Name
            </th>
            <th className="border border-gray-300 p-2 whitespace-nowrap">
              Deadline
            </th>
            <th className="border border-gray-300 p-2 whitespace-nowrap">
              Status
            </th>
            <th className="border border-gray-300 p-2 whitespace-nowrap">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <TaskRow
              key={task._id}
              task={task}
              onDelete={onDelete}
              onStatusChange={onStatusChange}
              index={index + 1}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
