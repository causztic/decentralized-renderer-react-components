import { ActionType } from "typesafe-actions";
import { OpenAttestationDocument, WrappedDocument } from "@govtechsg/open-attestation";
export declare const renderDocument: import("typesafe-actions").PayloadAC<"RENDER_DOCUMENT", {
    document: OpenAttestationDocument;
    rawDocument?: import("@govtechsg/open-attestation/dist/types/2.0/types").WrappedDocument<import("@govtechsg/open-attestation/dist/types/__generated__/schema.2.0").OpenAttestationDocument> | import("@govtechsg/open-attestation/dist/types/3.0/types").WrappedDocument<import("@govtechsg/open-attestation/dist/types/__generated__/schema.3.0").OpenAttestationDocument> | undefined;
}>;
export declare const selectTemplate: import("typesafe-actions").PayloadAC<"SELECT_TEMPLATE", string>;
export declare const getTemplates: import("typesafe-actions").PayloadAC<"GET_TEMPLATES", OpenAttestationDocument>;
export declare const print: import("typesafe-actions").EmptyAC<"PRINT">;
export declare const downloadPDF: import("typesafe-actions").EmptyAC<"DOWNLOAD_PDF">;
export declare type HostActions = ActionType<typeof renderDocument | typeof selectTemplate | typeof getTemplates | typeof print | typeof downloadPDF>;
export declare type HostActionsHandler = (action: HostActions) => void;
/**
 * @deprecated use HostActions
 */
export declare type LegacyHostActions = {
    renderDocument: (document: OpenAttestationDocument, rawDocument?: WrappedDocument<OpenAttestationDocument>) => void;
    selectTemplateTab: (tabIndex: number) => void;
    print: () => void;
};
