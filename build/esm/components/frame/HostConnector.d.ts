import { FrameActionsHandler } from "./frame.actions";
import { FunctionComponent } from "react";
import { HostActions } from "./host.actions";
interface HostConnectorProps {
    /**
     * Function that will listen for actions coming from the host.
     */
    dispatch: (action: HostActions) => void;
    /**
     * Function called once the connection has been established with the host. It provides another function to send actions to the host.
     */
    onConnected: (toHost: FrameActionsHandler) => void;
}
/**
 * Component connecting to the host of the frame.
 * Once the connection has been established, `onConnected` will be called and will provide, as first parameter, a function to send actions to the host.
 * This component must be provided a `dispatch `function that will listen for actions coming from the host.
 */
export declare const HostConnector: FunctionComponent<HostConnectorProps>;
export {};
