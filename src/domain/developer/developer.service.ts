import Util from "../../components/utils/util";
import DeveloperSchema from "./developer.schema";
import {
  BodyInsertDeveloper,
  ResponseDeveloperById,
  ResponseDevelopers,
  ResponseInsertDeveloper,
  ResponseLoginDeveloper,
} from "./developer.model";
import Bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";

class DeveloperService {
  async insertDeveloper(requestBody: BodyInsertDeveloper): Promise<ResponseInsertDeveloper> {
    try {
      const developerIsExist = await DeveloperSchema.findOne({ email: requestBody.email });

      if (developerIsExist) {
        throw Util.duplicate({ message: "Developer already registered" });
      }

      requestBody.password = await Bcrypt.hash(requestBody.cpf, 10);

      const createDeveloper = await DeveloperSchema.create({
        name: requestBody.name,
        cpf: requestBody.cpf,
        email: requestBody.email,
        password: requestBody.password,
      });

      return Util.create(createDeveloper, "Developer registered successfully");
    } catch (error) {
      throw error;
    }
  }

  async getAllDevelopers(): Promise<ResponseDevelopers> {
    try {
      const developers = await DeveloperSchema.findOne({ email: "guilhermemendesousa@gmail.com" });

      return Util.getAll(developers);
    } catch (error) {
      throw error;
    }
  }

  async getDeveloperById(id_developer: string): Promise<ResponseDeveloperById> {
    try {
      const developers = await DeveloperSchema.findById(id_developer);

      return Util.getAll(developers);
    } catch (error) {
      throw error;
    }
  }

  async loginDeveloper(email: string, password: string): Promise<ResponseLoginDeveloper> {
    try {
      const developer = await DeveloperSchema.findOne({ email });

      const passwordMatch = await Bcrypt.compare(password, developer?.password);

      if (!passwordMatch) throw Util.unauthorized("Incorrect username or password");

      const token = sign({}, "765b910f4c8564db18281f997b7cc926", {
        subject: `${developer._id}`,
        expiresIn: "1d",
      });

      return Util.login(
        {
          name: developer.name,
          cpf: developer.cpf,
          email: developer.email,
          active: developer.active,
        },
        token
      );
    } catch (error) {
      throw error;
    }
  }
}

export default new DeveloperService();
