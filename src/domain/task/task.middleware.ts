import { BAD_REQUEST } from "http-status";
import { Request, Response, NextFunction } from "express";

class TaskMiddleware {
  valideTaskBody = (req: Request, res: Response, next: NextFunction) => {
    const { description, responsable, status } = req.body;

    // Validation of required fields
    if (!description) {
      return res.status(BAD_REQUEST).send({
        error_code: "INVALID_DATA",
        error_description: `the {description} field is required`,
      });
    }

    if (!responsable) {
      return res.status(BAD_REQUEST).send({
        error_code: "INVALID_DATA",
        error_description: `the {responsable} field is required`,
      });
    }

    if (!status) {
      return res.status(BAD_REQUEST).send({
        error_code: "INVALID_DATA",
        error_description: `the {status} field is required`,
      });
    }
    next();
  };
}

export default new TaskMiddleware();
