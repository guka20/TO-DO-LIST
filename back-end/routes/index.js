const express = require('express');
const router = express.Router();
const controllers = require('../controllers/todoController')
const todoMiddlewares = require('../middlewares/todoMiddleware')

router.get('/',controllers.getAllTodo)

router.post('/',todoMiddlewares.newTodo,controllers.addNewTodo)

router.patch('/:id',todoMiddlewares.updateTodo,controllers.updateTodo)

router.delete('/:id',controllers.deleteTodo)

module.exports = router