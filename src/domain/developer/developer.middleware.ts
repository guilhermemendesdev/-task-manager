import { BAD_REQUEST } from "http-status";
import { Request, Response, NextFunction } from "express";

class DeveloperMiddleware {
  valideDeveloperBody = (req: Request, res: Response, next: NextFunction) => {
    const { name, email } = req.body;

    // Validation of required fields
    if (!name) {
      return res.status(BAD_REQUEST).send({
        error_code: "INVALID_DATA",
        error_description: `the {name} field is required`,
      });
    }

    if (!email) {
      return res.status(BAD_REQUEST).send({
        error_code: "INVALID_DATA",
        error_description: `the {email} field is required`,
      });
    }
    next();
  };

  valideDeveloperById = (req: Request, res: Response, next: NextFunction) => {
    const { id_developer } = req.params;

    // Validation of required fields
    if (!id_developer) {
      return res.status(BAD_REQUEST).send({
        error_code: "INVALID_DATA",
        error_description: `the {id_developer} param is required`,
      });
    }
    next();
  };

  valideLoginDeveloper = (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    // Validation of required fields
    if (!email) {
      return res.status(BAD_REQUEST).send({
        error_code: "INVALID_DATA",
        error_description: `the {email} field is required`,
      });
    }

    if (!password) {
      return res.status(BAD_REQUEST).send({
        error_code: "INVALID_DATA",
        error_description: `the {password} field is required`,
      });
    }
    next();
  };
}

export default new DeveloperMiddleware();
