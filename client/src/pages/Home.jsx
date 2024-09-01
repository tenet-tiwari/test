
import React, { useState, useEffect } from "react";
import TaskTable from "../components/TaskTable";
import Example from "../components/AddModal";
import { toast } from "react-toastify";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("https://to-do-app-backend-qkmb.onrender.com/api/tasks", {
          method: "GET",
        });
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, [isModalOpen]);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://to-do-app-backend-qkmb.onrender.com/api/tasks/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.error("Task deleted successfully");
        setTasks(tasks.filter((task) => task._id !== id));
      } else {
        console.error("Failed to delete task");
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      const response = await fetch(`https://to-do-app-backend-qkmb.onrender.com/api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        const updatedTask = await response.json();
        toast.success("Task status updated successfully");
        setTasks(tasks.map((task) => (task._id === id ? updatedTask.task : task)));
      } else {
        console.error("Failed to update task status");
      }
    } catch (error) {
      toast.error("Error updating task status");
      console.error("Error updating task status:", error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-indigo-200 from-10% via-sky-200 via-30% to-emerald-200 to-80%">

    
    <div className="min-h-screen flex items-center justify-center relative">
    <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-200 ">

      <div
        className={`w-full max-w-4xl p-6 rounded-lg shadow-xl mx-auto z-10 ${isModalOpen ? "blur-sm" : ""}`}
      >
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">TODO App</h1>
        <TaskTable tasks={tasks} onDelete={handleDelete} onStatusChange={handleStatusChange} />

        <div className="text-center mt-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
          >
            Add Task
          </button>
        </div>

        {isModalOpen && <Example onClose={() => setIsModalOpen(false)} />}
      </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
