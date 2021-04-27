import React from "react";
import { Attachment } from "../../types";
/**
 * Function returning the correct attachment renderer depending on the attachment type. Currently supports:
 * - application/pdf
 * @default use UnsupportedRenderer when no suitable renderer is found
 */
export declare function fullAttachmentRenderer(attachment: Attachment): React.FunctionComponent;
