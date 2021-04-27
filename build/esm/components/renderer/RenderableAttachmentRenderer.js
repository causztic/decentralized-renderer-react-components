import { PdfRenderer } from "./PdfRenderer";
import React from "react";
import { getAttachmentMimeType } from "../../utils";
/**
 * Function returning the correct attachment renderer depending on the attachment type. Currently supports:
 * - application/pdf
 * returns null when not attachment cannot be rendered
 */
export function renderableAttachmentRenderer(attachment) {
    if (getAttachmentMimeType(attachment) === "application/pdf") {
        // eslint-disable-next-line react/display-name
        return () => React.createElement(PdfRenderer, { attachment: attachment });
    }
    return null;
}
//# sourceMappingURL=RenderableAttachmentRenderer.js.map