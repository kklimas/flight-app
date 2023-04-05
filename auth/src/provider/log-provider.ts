import {createLogger, transports, format, Logger} from "winston";

const LogProvider: Logger = createLogger({
    transports: [
        new transports.Console(),
    ],
    format: format.combine(
        format.label({
            label: `Label🏷️`
        }),
        format.colorize(),
        format.timestamp({
            format: 'MM-DD-YYYY hh:mm:ss:mm'
        }),
        format.printf(info => `${[info.timestamp]} - ${info.level} - ${info.message}`),
    )
})

export default LogProvider;