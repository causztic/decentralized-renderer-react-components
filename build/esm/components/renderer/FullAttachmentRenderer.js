import { PdfRenderer } from "./PdfRenderer";
import { UnsupportedRenderer } from "./UnsupportedRenderer";
import React from "react";
import { getAttachmentMimeType } from "../../utils";
/**
 * Function returning the correct attachment renderer depending on the attachment type. Currently supports:
 * - application/pdf
 * @default use UnsupportedRenderer when no suitable renderer is found
 */
export function fullAttachmentRenderer(attachment) {
    if (getAttachmentMimeType(attachment) === "application/pdf") {
        // eslint-disable-next-line react/display-name
        return () => React.createElement(PdfRenderer, { attachment: attachment });
    }
    // eslint-disable-next-line react/display-name
    return () => React.createElement(UnsupportedRenderer, { attachment: attachment });
}
//# sourceMappingURL=FullAttachmentRenderer.js.map