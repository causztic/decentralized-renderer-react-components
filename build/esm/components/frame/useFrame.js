import { useEffect, useState } from "react";
import connectToParent from "penpal/lib/connectToParent";
import connectToChild from "penpal/lib/connectToChild";
import { inIframe } from "../../utils";
export const useParentFrame = function ({ dispatch, }) {
    const [parentFrameConnection, setParentFrameConnection] = useState();
    const [status, setStatus] = useState("DISCONNECTED");
    useEffect(() => {
        const run = async () => {
            setParentFrameConnection(await connectToParent({
                methods: {
                    dispatch: dispatch,
                },
            }).promise);
            setStatus("CONNECTED");
        };
        if (inIframe() && status === "DISCONNECTED") {
            setStatus("CONNECTING");
            run();
        }
    }, [status, dispatch]);
    return [status === "CONNECTED", parentFrameConnection];
};
export const useChildFrame = function (props) {
    const [parentFrameConnection, setParentFrameConnection] = useState();
    const [status, setStatus] = useState("DISCONNECTED");
    useEffect(() => {
        const run = async () => {
            setParentFrameConnection(await connectToChild({
                methods: {
                    dispatch: props.dispatch,
                    ...props.methods,
                },
                iframe: props.iframe.current,
            }).promise);
            setStatus("CONNECTED");
        };
        if (props.iframe.current && status === "DISCONNECTED") {
            setStatus("CONNECTING");
            run();
        }
    }, [status, props]);
    return [status === "CONNECTED", parentFrameConnection];
};
//# sourceMappingURL=useFrame.js.map