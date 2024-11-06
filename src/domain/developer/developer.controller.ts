import { Request, Response } from "express";

import DeveloperService from "./developer.service";

class DeveloperController {
  async insertDeveloper(req: Request, res: Response, next) {
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
}

export default new DeveloperController();
