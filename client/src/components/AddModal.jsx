"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function Example({ onClose }) {
  const [taskName, setTaskName] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`https://to-do-app-backend-n4sl.onrender.com/api/tasks`, {
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({ taskName, deadline }),
      });
  
      if (response.ok) {
        toast.success(response?.message)
        const newTask = await response.json();
        setTasks([...tasks, newTask]);
      } else {
        console.error("Failed to add task");
      }
    } catch (error) {
      console.error("Error adding task:", error);
    }
  
    setTaskName("");
    setDeadline("");
    onClose(); 
  };
  


  return (
    <Dialog open={true} onClose={onClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      />

      <div className="fixed inset-0 z-10 flex items-center justify-center p-4 text-center">
        <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full max-w-2xl sm:max-w-lg md:max-w-xl lg:max-w-2xl h-auto">
          <div className="w-auto bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-6">
            <div className="w-auto flex flex-col justify-center items-center p-4">
              <div className="flex flex-col items-center  mb-4">
                <div className="mx-auto flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                  <CheckCircleIcon
                    aria-hidden="true"
                    className="h-8 w-8 text-green-600"
                  />
                </div>
                <DialogTitle
                  as="h3"
                  className="-ml-0.3 mt-3 text-xl font-semibold leading-6 text-gray-900 "
                >
                  Add Task
                </DialogTitle>
              </div>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 w-full max-w-md px-2 sm:px-0"
              >
                <div>
                  <label
                    htmlFor="taskName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Task Name
                  </label>
                  <input
                    type="text"
                    id="taskName"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="deadline"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Deadline
                  </label>
                  <input
                    type="date"
                    id="deadline"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="flex justify-end space-x-4 mt-4">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex justify-center rounded-md bg-gray-200 px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
