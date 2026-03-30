import { AddTaskController } from "../controllers/task/addTask";
import { DateValidatorAdapter } from "../dateValidator";
import { TaskMongoRepository } from "../../dataSources/db/repository/taskMongoRepository";
import { DbAddTask } from "../../dataSources/db/dbAddTask";

export const taskControllerFactory = () => {
  const dateValidatorAdapter = new DateValidatorAdapter();
  const taskMongoRespository = new TaskMongoRepository();
  const dbAddTask = new DbAddTask(taskMongoRespository);
  return new AddTaskController(dbAddTask, dateValidatorAdapter);
};
