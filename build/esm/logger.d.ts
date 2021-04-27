import debug from "debug";
interface Logger {
    trace: debug.Debugger;
    info: debug.Debugger;
    error: debug.Debugger;
}
export declare const getLogger: (namespace: string) => Logger;
export {};
