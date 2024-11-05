import { Router } from "express";

import TaskController from "./task.controller";
import TaskMiddleware from "./task.middleware";

const TaskRouter = Router();

TaskRouter.route("/insert-tasks").post(TaskMiddleware.valideTaskBody, TaskController.insertTask);

export default TaskRouter;
