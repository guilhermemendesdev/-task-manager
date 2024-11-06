import Util from "../../components/utils/util";
import DeveloperSchema from "./developer.schema";
import { BodyInsertDeveloper } from "./developer.model";
import Bcrypt from "bcrypt";

class DeveloperService {
  async insertDeveloper(requestBody: BodyInsertDeveloper): Promise<any> {
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
      return error;
    }
  }
}

export default new DeveloperService();
