const express = require('express');
const { createTask, getTasks,deleteTask,updateTask } = require('../controllers/taskController');

const router = express.Router();

router.route('/').post(createTask).get(getTasks);
router.route('/:id').delete(deleteTask);
router.route('/:id').put(updateTask);

module.exports = router;
