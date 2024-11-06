import { Router } from "express";
import DeveloperMiddleware from "./developer.middleware";
import DeveloperController from "./developer.controller";

const DeveloperRouter = Router();

DeveloperRouter.route("/insert-developer").post(
  DeveloperMiddleware.valideDeveloperBody,
  DeveloperController.insertDeveloper
);

export default DeveloperRouter;
