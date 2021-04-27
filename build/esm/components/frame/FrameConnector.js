import React, { useEffect, useMemo, useRef, useState } from "react";
import { useChildFrame } from "./useFrame";
import { obfuscateField, updateHeight, updateTemplates } from "./frame.actions";
/**
 * Component creating a frame and establishing a connection with it.
 * Once the connection has been established, `onConnected` will be called and will provide, as first parameter, a function to send actions to the frame.
 * This component must be provided
 * - a `dispatch `function that will listen for actions coming from the frame
 * - the URL of the decentralized renderer to use as the `source` prop
 */
export const FrameConnector = ({ dispatch, source, onConnected, style, className = "", sandbox = "allow-scripts allow-same-origin allow-modals allow-popups allow-downloads", }) => {
    const [onConnectedCalled, setOnConnectedCalled] = useState(false); // ensure on connected is called once only
    const iframe = useRef(null);
    // this is used to store internally the latest templates shared in order to automatically transform
    // the selected template tab from the label to th index in the event we communicate with a legacy renderer
    // - templates is used to store the latest templates received and we use a ref in order to avoid triggering effect change when templates. Triggering the effect would mean that the consumer would be called again with the `onConnected` callback, which could be weird
    // - dispatchProxy is used to listen for action and react accordingly (update templates)
    const templates = useRef([]);
    const dispatchProxy = useMemo(() => {
        return (action) => {
            if (action.type === "UPDATE_TEMPLATES") {
                templates.current = action.payload;
            }
            return dispatch(action);
        };
    }, [dispatch]);
    // map automatically legacy method to the dispatch object so that the consumer doesn't need to provide this
    // that way we handle automatically legacy renderer
    const methods = useMemo(() => {
        return {
            updateHeight: (height) => dispatchProxy(updateHeight(height)),
            updateTemplates: (templates) => dispatchProxy(updateTemplates(templates)),
            handleObfuscation: (field) => dispatchProxy(obfuscateField(field)),
        };
    }, [dispatchProxy]);
    const [connected, toFrame] = useChildFrame({ methods, dispatch: dispatchProxy, iframe });
    useEffect(() => {
        if (connected && !onConnectedCalled) {
            setOnConnectedCalled(true);
            onConnected(Object.assign((action) => {
                // if toFrame.dispatch is set that means we are on the main track with modern renderer
                // there is nothing to do but to call dispatch with the action provided.
                if (toFrame.dispatch) {
                    toFrame.dispatch(action);
                }
                else {
                    // otherwise if toFrame.dispatch is NOT set that means that we are dealing with a legacy renderer
                    // in that event we will map each action to it's legacy renderer function
                    // - "RENDER_DOCUMENT" must call toFrame.renderDocument
                    // - "SELECT_TEMPLATE" must call toFrame.selectTemplateTab
                    // - "PRINT" must call toFrame.print
                    if (action.type === "RENDER_DOCUMENT" && toFrame.renderDocument) {
                        toFrame.renderDocument(action.payload.document, action.payload.rawDocument);
                    }
                    else if (action.type === "SELECT_TEMPLATE" && toFrame.selectTemplateTab) {
                        const index = templates.current.findIndex((template) => template.id === action.payload);
                        if (index === -1)
                            console.error(`Unable to find the index associated with the label ${action.payload}`);
                        toFrame.selectTemplateTab(index);
                    }
                    else if (action.type === "PRINT" && toFrame.print) {
                        toFrame.print();
                    }
                }
            }));
        }
    }, [connected, toFrame, onConnected, onConnectedCalled]);
    return (React.createElement("iframe", { title: "Decentralised Rendered Certificate", id: "iframe", ref: iframe, src: source, style: style, className: className, sandbox: sandbox }));
};
//# sourceMappingURL=FrameConnector.js.map