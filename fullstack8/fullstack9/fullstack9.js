const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/todoDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Schema
const todoSchema = new mongoose.Schema({
  text: String,
  completed: Boolean
});

const Todo = mongoose.model("Todo", todoSchema);

// CREATE
app.post("/todos", async (req, res) => {
  const todo = new Todo(req.body);
  const saved = await todo.save();
  res.json(saved);
});

// READ
app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// UPDATE
app.put("/todos/:id", async (req, res) => {
  const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE
app.delete("/todos/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

app.listen(5000, () => console.log("Server running on 5000"));