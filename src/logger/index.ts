import logger from "pino"
import dayjs from "dayjs"

const log = logger({
    prettifier: require('pino-pretty'),
    timestamp: () => `,"time":"${dayjs().format()}"`
})

export default log;