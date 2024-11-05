import Util from "../../components/utils/util";
import TaskSchema from "./task.schema";
import { BodyInsertTask } from "./task.model";

class TaskService {
  async insertTask(requestBody: BodyInsertTask): Promise<any> {
    try {
      const createTask = await TaskSchema.create({
        description: requestBody.description,
        responsable: requestBody.responsable,
        status: requestBody.status,
        computer: "Test",
      });

      return Util.create(createTask, "Task registered successfully");
    } catch (e) {
      console.log(e);
    }
  }
}

export default new TaskService();
