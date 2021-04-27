import React from "react";
import { Attachment } from "../../types";
/**
 * Function returning the correct attachment renderer depending on the attachment type. Currently supports:
 * - application/pdf
 * returns null when not attachment cannot be rendered
 */
export declare function renderableAttachmentRenderer(attachment: Attachment): React.FunctionComponent | null;
