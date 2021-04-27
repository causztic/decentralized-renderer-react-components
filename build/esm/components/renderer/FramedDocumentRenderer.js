import React, { useCallback, useRef, useState } from "react";
import { documentTemplates, noop } from "../../utils";
import { getLogger } from "../../logger";
import { obfuscateField, updateHeight, updateTemplates } from "../frame/frame.actions";
import { HostConnector } from "../frame/HostConnector";
import { DomListener } from "../common/DomListener";
import { noAttachmentRenderer } from "./NoAttachmentRenderer";
import { savePdf } from "../../service/save-pdf";
const { trace } = getLogger("FramedDocumentRenderer");
export function FramedDocumentRenderer({ templateRegistry, attachmentToComponent = noAttachmentRenderer, }) {
    const [document, setDocument] = useState();
    // used only to handle legacy setSelectTemplate function
    // dispatch function (below) is connected once through the frame and the reference to this function never change is
    // host and iframe. We need to use a reference to allow object mutation
    const documentForLegacyUsage = useRef();
    const [rawDocument, setRawDocument] = useState();
    const [templateName, setTemplateName] = useState();
    const toHost = useRef(noop);
    const templates = document
        ? documentTemplates(document, templateRegistry, attachmentToComponent)
        : [];
    const templateConfiguration = templates.find((template) => template.id === templateName) || templates[0] || {};
    const Template = templateConfiguration.template;
    const onConnected = useCallback((postMessage) => {
        toHost.current = postMessage;
    }, []);
    // actions received by the parent hosting the component
    const dispatch = useCallback((action) => {
        trace("in frame, received action", action.type);
        if (action.type === "RENDER_DOCUMENT") {
            setDocument(action.payload.document);
            documentForLegacyUsage.current = action.payload.document;
            if (action.payload.rawDocument) {
                setRawDocument(action.payload.rawDocument);
            }
            const run = async () => {
                const templates = await documentTemplates(action.payload.document, templateRegistry, attachmentToComponent).map((template) => ({
                    id: template.id,
                    label: template.label,
                    type: template.type,
                }));
                toHost.current(updateTemplates(templates));
            };
            run();
        }
        else if (action.type === "SELECT_TEMPLATE") {
            setTemplateName(action.payload);
        }
        else if (action.type === "GET_TEMPLATES") {
            const templates = documentTemplates(action.payload, templateRegistry, attachmentToComponent).map((template) => ({
                id: template.id,
                label: template.label,
                type: template.type,
            }));
            toHost.current(updateTemplates(templates)); // send the result to the iframe
            return templates; // react-native expect to get the result directly
        }
        else if (action.type === "PRINT") {
            window.print();
        }
        else if (action.type === "DOWNLOAD_PDF") {
            const cert = window.document.getElementById("rendered-certificate");
            savePdf(cert)
                .then(() => trace("File successfully downloaded"))
                .catch((error) => trace(error));
        }
        else {
            throw new Error(`Action ${JSON.stringify(action)} is not handled`);
        }
    }, [templateRegistry, attachmentToComponent]);
    window.openAttestation = dispatch; // expose different actions for direct injection
    return (React.createElement(DomListener, { onUpdate: (height) => toHost.current(updateHeight(height)) },
        React.createElement(HostConnector, { dispatch: dispatch, onConnected: onConnected }, document && Template && (React.createElement("div", { className: "frameless-tabs", id: "rendered-certificate" },
            React.createElement(Template, { document: document, wrappedDocument: rawDocument, handleObfuscation: (field) => toHost.current(obfuscateField(field)) }))))));
}
//# sourceMappingURL=FramedDocumentRenderer.js.map