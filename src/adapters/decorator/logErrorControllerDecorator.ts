import { LogErroRepository } from "../../usecases/repository/logErrorRepository";
import Controller from "../interfaces/controller";
import { HttpRequest, HttpResponse } from "../interfaces/http";

export class LogErrorControllerDecorator implements Controller {
  constructor(
    private readonly controller: Controller,
    private readonly logErroRepository: LogErroRepository,
  ) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const httpResponse = await this.controller.handle(httpRequest);
    if (httpResponse.statusCode === 500) {
      await this.logErroRepository.log(httpResponse.body.stack);
    }
    return httpResponse;
  }
}
