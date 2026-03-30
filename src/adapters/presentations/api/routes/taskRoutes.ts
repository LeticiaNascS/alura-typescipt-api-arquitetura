import { Request, Response, Router } from "express";
import { AddTaskController } from "../../../controllers/task/addTask";
import { expressRouteAdapter } from "../../../expressRouteAdapter";
import { DateValidatorAdapter } from "../../../dateValidator";
import { TaskMongoRepository } from "../../../../dataSources/db/repository/taskMongoRepository";
import { DbAddTask } from "../../../../dataSources/db/dbAddTask";

export default (router: Router): void => {
  const dateValidatorAdapter = new DateValidatorAdapter();
  const taskMongoRespository = new TaskMongoRepository();
  const dbAddTask = new DbAddTask(taskMongoRespository);
  const addTaskController = new AddTaskController(
    dbAddTask,
    dateValidatorAdapter,
  );
  router.post("/tasks", expressRouteAdapter(addTaskController));
};
