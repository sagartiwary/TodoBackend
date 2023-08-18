
const express = require("express");
const { getTodos, addTodos, singleTodo, editTodo, deleteTodo } = require("../Controller/TodoController");
const Router = express.Router();

Router.get("/", getTodos)
Router.post("/post", addTodos);
Router.get("/:id", singleTodo);
Router.patch("/:id", editTodo);
Router.delete("/:id", deleteTodo)
module.exports = {
    Router
}
