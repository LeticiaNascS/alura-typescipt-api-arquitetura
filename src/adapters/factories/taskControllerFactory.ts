import { AddTaskController } from "../controllers/task/addTask";
import { DateValidatorAdapter } from "../dateValidator";
import { TaskMongoRepository } from "../../dataSources/db/repository/taskMongoRepository";
import { DbAddTask } from "../../dataSources/db/dbAddTask";
import { LogErrorControllerDecorator } from "../decorator/logErrorControllerDecorator";
import { LogErrorMongoRepository } from "../../dataSources/db/repository/logErrorMongoRepository";
import { addTaskValidationCompositeFactory } from "./addTaksValidationCompositeFactory";

export const taskControllerFactory = () => {
  const taskMongoRespository = new TaskMongoRepository();
  const dbAddTask = new DbAddTask(taskMongoRespository);
  const taskController = new AddTaskController(dbAddTask, addTaskValidationCompositeFactory());
  const logErrorMongoRepository = new LogErrorMongoRepository()
  return new LogErrorControllerDecorator(taskController,logErrorMongoRepository)
};
