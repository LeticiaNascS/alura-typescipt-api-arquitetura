import { LogErroRepository } from "../../../usecases/repository/logErrorRepository";
import { MongoManager } from "../config/mongoManager";


export class LogErrorMongoRepository implements LogErroRepository{
    async log(stack: string): Promise<void>{
        const logErrorCollection = MongoManager.getInstance().getCollection("error")
        await logErrorCollection.insertOne({stack,date: new Date()})
    }
}