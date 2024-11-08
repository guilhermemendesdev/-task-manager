import { Request, Response } from "express";

import DeveloperService from "./developer.service";

class DeveloperController {
  async insertDeveloper(req: Request, res: Response) {
    try {
      const { status, result, message } = await DeveloperService.insertDeveloper(req.body);
      console.log(status);
      if (status == 409) {
        return res.status(status).send(message);
      }
      return res.status(status).send(result);
    } catch (error) {
      return res.status(error.status).send(error.message);
    }
  }

  async getAllDevelopers(req: Request, res: Response) {
    try {
      const { status, result } = await DeveloperService.getAllDevelopers();
      return res.status(status).send(result);
    } catch (error) {
      return res.status(error.status).send(error.message);
    }
  }

  async getDeveloperById(req: Request, res: Response) {
    try {
      const { idDeveloper } = req.params;
      const { status, result } = await DeveloperService.getDeveloperById(idDeveloper);
      return res.status(status).send(result);
    } catch (error) {
      return res.status(error.status).send(error.message);
    }
  }

  async loginDeveloper(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const { status, result, token } = await DeveloperService.loginDeveloper(email, password);

      return res.status(status).send({ result, token });
    } catch (error) {
      return res.status(error.status).send(error.message);
    }
  }

  async updatePasswordDeveloper(req: Request, res: Response) {
    try {
      const { newPassword } = req.body;
      const { idDeveloper } = req.params;
      const { status, result, token } = await DeveloperService.updatePasswordDeveloper(newPassword, idDeveloper);

      return res.status(status).send({ result, token });
    } catch (error) {
      return res.status(error.status).send(error.message);
    }
  }
}

export default new DeveloperController();
