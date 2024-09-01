const express = require('express');
const { createTask, getTasks,deleteTask } = require('../controllers/taskController');

const router = express.Router();

router.route('/').post(createTask).get(getTasks);
router.route('/:id').delete(deleteTask);

module.exports = router;
