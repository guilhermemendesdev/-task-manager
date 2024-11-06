import { Router } from "express";
import DefaultRouter from "./domain/default.router";
import TaskRouter from "./domain/task/task.router";
import DeveloperRouter from "./domain/developer/developer.router";

const AppRouter = Router();
AppRouter.use("/", DefaultRouter).use("/task", TaskRouter).use("/developer", DeveloperRouter);

export default AppRouter;
