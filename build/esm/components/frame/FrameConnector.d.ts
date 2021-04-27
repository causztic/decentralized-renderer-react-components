import { CSSProperties, FunctionComponent } from "react";
import { HostActionsHandler, LegacyHostActions } from "./host.actions";
import { FrameActions } from "./frame.actions";
interface BaseFrameConnectorProps {
    /**
     * URL of the content of the frame to render (URL to a decentralized renderer)
     */
    source: string;
    /**
     * Function called once the connection has been established with the frame. It provides another function to send actions to the frame.
     */
    onConnected: (toFrame: HostActionsHandler & LegacyHostActions) => void;
    /**
     * style to apply to the frame
     */
    className?: string;
    /**
     * style to apply to the frame
     */
    style?: CSSProperties;
    /**
     * custom iframe sandbox properties to apply, will override default
     */
    sandbox?: string;
}
interface FrameConnectorProps extends BaseFrameConnectorProps {
    /**
     * Function that will listen for actions coming from the frame.
     */
    dispatch: (action: FrameActions) => void;
}
/**
 * Component creating a frame and establishing a connection with it.
 * Once the connection has been established, `onConnected` will be called and will provide, as first parameter, a function to send actions to the frame.
 * This component must be provided
 * - a `dispatch `function that will listen for actions coming from the frame
 * - the URL of the decentralized renderer to use as the `source` prop
 */
export declare const FrameConnector: FunctionComponent<FrameConnectorProps>;
export {};
