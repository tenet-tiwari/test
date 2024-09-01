import React, { useEffect } from "react";

const TaskStatusDropdown = ({task, status, onStatusChange }) => {
  const handleChange = (event) => {
    console.log(event.target.value)
  ;
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "complete":
        return "bg-green-100 text-green-700";
      case "ongoing":
        return "bg-yellow-100 text-yellow-700";
      case "incomplete":
      default:
        return "bg-red-100 text-red-700";
    }
  };

useEffect(()=>{
  getStatusClass(status);
},[status]);

  return (
    <select
      className={`w-full p-1 rounded border border-gray-300 ${getStatusClass(
        status
      )} hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500`}
      value={status}
      onChange={(e)=>{onStatusChange(task._id,e.target.value)}}
    >
      <option value="incomplete">Incomplete</option>
      <option value="ongoing">Ongoing</option>
      <option value="complete">Complete</option>
    </select>
  );
};

export default TaskStatusDropdown;
