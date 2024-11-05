import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  responsable: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  computer: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
    required: true,
  },
  updated_at: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const TaskMongo = mongoose.model("Task", TaskSchema);

export default TaskMongo;
