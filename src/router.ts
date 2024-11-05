import { Router } from "express";
import DefaultRouter from "./domain/default.router";
import TaskRouter from "./domain/task/task.router";

const AppRouter = Router();
AppRouter.use("/", DefaultRouter)
.use("/task", TaskRouter)


export default AppRouter;
