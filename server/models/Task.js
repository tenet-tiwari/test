const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "complete", "ongoing"],
    default: "pending", 
  },
}, {
  timestamps: true,
});


const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
