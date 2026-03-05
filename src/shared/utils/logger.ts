import pino from 'pino';
import fs from 'fs';
import path from 'path';

const logDir = path.join(process.cwd(), "logs");

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const transport = pino.transport({
    targets: [
        {
            target: "pino/file",
            options: { destination: "./logs/app.log" },
            level: "info",
        },
        {
            target: "pino/file",
            options: { destination: "./logs/error.log" },
            level: "error",
        }
    ]
});

export const logger = pino({
    level: "info",
}, transport);