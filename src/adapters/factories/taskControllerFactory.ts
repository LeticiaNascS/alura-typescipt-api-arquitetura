import { AddTaskController } from "../controllers/task/addTask";
import { DateValidatorAdapter } from "../dateValidator";
import { TaskMongoRepository } from "../../dataSources/db/repository/taskMongoRepository";
import { DbAddTask } from "../../dataSources/db/dbAddTask";
import { LogErrorControllerDecorator } from "../decorator/logErrorControllerDecorator";

export const taskControllerFactory = () => {
  const dateValidatorAdapter = new DateValidatorAdapter();
  const taskMongoRespository = new TaskMongoRepository();
  const dbAddTask = new DbAddTask(taskMongoRespository);
  const taskController = new AddTaskController(dbAddTask, dateValidatorAdapter);
  return new LogErrorControllerDecorator(taskController)
};
