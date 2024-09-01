
import React, { useState } from 'react';
import TaskTable from '../components/TaskTable';
import Example from '../components/AddModal'; 

const Home = () => {
  const initialTasks = [
    { id: 1, name: 'Complete React project', deadline: '2024-09-10', status: 'Incomplete' },
    { id: 2, name: 'Write documentation', deadline: '2024-09-15', status: 'Complete' },
    { id: 3, name: 'Review code', deadline: '2024-09-20', status: 'Incomplete' },
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleStatusChange = (id, status) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, status } : task
    ));
  };

  return (
    <div className={`w-full max-w-4xl p-6 rounded-lg shadow-md mx-auto ${isModalOpen ? 'blur-sm' : ''}`}>
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">TODO App</h1>
      <TaskTable tasks={tasks} onDelete={handleDelete} onStatusChange={handleStatusChange} />
      
      <div className="text-center mt-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
        >
          Help
        </button>
      </div>
      
      {/* Conditional Rendering of the Modal */}
      {isModalOpen && (
        <Example onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default Home;
