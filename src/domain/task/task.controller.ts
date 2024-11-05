import { Request, Response } from "express";

import TaskService from "./task.service";

class TaskController {
  async insertTask(req: Request, res: Response, next) {
    try {
      const { status, result } = await TaskService.insertTask(req.body);
      return res.status(status).send(result);
    } catch (error) {
      return res.status(error.status).send({ error });
    }
  }
}

export default new TaskController();
