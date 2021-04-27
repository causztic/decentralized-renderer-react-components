import React from "react";
import { getAttachmentMimeType } from "../../utils";
/**
 * Component rendering unsupported attachments
 */
export const UnsupportedRenderer = ({ attachment }) => (React.createElement("div", null,
    React.createElement("h2", null, "Rendering of this type of attachment is not supported."),
    React.createElement("p", null,
        "Please check your mime-type: ",
        getAttachmentMimeType(attachment))));
//# sourceMappingURL=UnsupportedRenderer.js.map