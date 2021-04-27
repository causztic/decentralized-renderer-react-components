import React from "react";
import { Attachment, TemplateRegistry } from "../../types";
import { OpenAttestationDocument, v2, v3 } from "@govtechsg/open-attestation";
export declare function FramedDocumentRenderer<D extends v3.OpenAttestationDocument = v3.OpenAttestationDocument>({ templateRegistry, attachmentToComponent, }: {
    templateRegistry: TemplateRegistry<D>;
    attachmentToComponent?: (attachment: Attachment, document: OpenAttestationDocument) => React.FunctionComponent | null;
}): JSX.Element;
export declare function FramedDocumentRenderer<D extends v2.OpenAttestationDocument = v2.OpenAttestationDocument>({ templateRegistry, attachmentToComponent, }: {
    templateRegistry: TemplateRegistry<D>;
    attachmentToComponent?: (attachment: Attachment, document: OpenAttestationDocument) => React.FunctionComponent | null;
}): JSX.Element;
