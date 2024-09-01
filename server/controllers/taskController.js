const Task = require('../models/Task');

const createTask = async (req, res) => {
  console.log(req.body);
  try {
    const { taskName, deadline } = req.body;

    const task = new Task({
      taskName,
      deadline,
    });

    const createdTask = await task.save();
    res.status(201).json({createdTask,message:"Task created successfully"});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.json(tasks);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (task) {
      await Task.deleteOne({ _id: req.params.id });
      res.json({ message: 'Task deleted' });
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const updateTask = async (req, res) => {
  try {
    const { id } = req.params; 
    const { status } = req.body; 
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { status }, 
      { new: true, runValidators: true } 
    );

    if (updatedTask) {
      res.status(200).json({ message: 'Task status updated successfully', task: updatedTask });
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  createTask,
  getTasks,
  deleteTask,
  updateTask
};
