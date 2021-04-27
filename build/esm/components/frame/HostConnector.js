import React, { useEffect } from "react";
import { useParentFrame } from "./useFrame";
/**
 * Component connecting to the host of the frame.
 * Once the connection has been established, `onConnected` will be called and will provide, as first parameter, a function to send actions to the host.
 * This component must be provided a `dispatch `function that will listen for actions coming from the host.
 */
export const HostConnector = ({ dispatch, children, onConnected }) => {
    const [connected, toHost] = useParentFrame({
        dispatch,
    });
    useEffect(() => {
        if (connected) {
            onConnected((action) => {
                if (toHost.dispatch) {
                    toHost.dispatch(action);
                }
            });
        }
    }, [connected, toHost, onConnected]);
    return React.createElement(React.Fragment, null, children);
};
//# sourceMappingURL=HostConnector.js.map