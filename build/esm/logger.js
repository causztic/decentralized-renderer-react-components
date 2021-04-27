import debug from "debug";
const logger = debug("decentralized-renderer");
export const getLogger = (namespace) => ({
    trace: logger.extend(`trace:${namespace}`),
    info: logger.extend(`info:${namespace}`),
    error: logger.extend(`error:${namespace}`),
});
//# sourceMappingURL=logger.js.map