import { promises } from "dns";

export interface LogErroRepository {
    log(stack: string ): Promise<void>
}