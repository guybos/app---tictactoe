import { createSimpleLogger } from "simple-node-logger";

export const logger = createSimpleLogger({
    logFilePath: process.env.LOG_FILE || 'log.log',
    timestampFormat: 'YYYY-MM-DD HH:mm:ss.SSS',
    separator: ' | ',
});