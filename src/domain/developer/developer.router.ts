import { Router } from "express";
import DeveloperMiddleware from "./developer.middleware";
import DeveloperController from "./developer.controller";

const DeveloperRouter = Router();

DeveloperRouter.route("/insert-developer").post(
  DeveloperMiddleware.valideDeveloperBody,
  DeveloperController.insertDeveloper
);

DeveloperRouter.route("/get-developers").get(DeveloperController.getAllDevelopers);

DeveloperRouter.route("/get-developer/:idDeveloper").get(
  DeveloperMiddleware.valideDeveloperById,
  DeveloperController.getDeveloperById
);

DeveloperRouter.route("/session-developer/login").post(
  DeveloperMiddleware.valideLoginDeveloper,
  DeveloperController.loginDeveloper
);

DeveloperRouter.route("/session-developer/update-password").patch(
  DeveloperMiddleware.valideUpdatePasswordDeveloper,
  DeveloperController.updatePasswordDeveloper
);
export default DeveloperRouter;
