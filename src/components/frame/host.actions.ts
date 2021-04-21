// actions sent by host to frame
import { ActionType, createStandardAction } from "typesafe-actions";
import { OpenAttestationDocument, WrappedDocument } from "@govtechsg/open-attestation";

export const renderDocument = createStandardAction("RENDER_DOCUMENT")<{
  document: OpenAttestationDocument;
  rawDocument?: WrappedDocument<OpenAttestationDocument>;
}>();

export const selectTemplate = createStandardAction("SELECT_TEMPLATE")<string>();
export const getTemplates = createStandardAction("GET_TEMPLATES")<OpenAttestationDocument>();
export const print = createStandardAction("PRINT")();

// I think we can just remove the argument typing, so we are just downloading the html
export const downloadPDF = createStandardAction("DOWNLOAD_PDF")<{
  document: OpenAttestationDocument;
  rawDocument?: WrappedDocument<OpenAttestationDocument>;
}>();

export type HostActions = ActionType<
  typeof renderDocument | typeof selectTemplate | typeof getTemplates | typeof print | typeof downloadPDF
>;
export type HostActionsHandler = (action: HostActions) => void;

/**
 * @deprecated use HostActions
 */
export type LegacyHostActions = {
  renderDocument: (document: OpenAttestationDocument, rawDocument?: WrappedDocument<OpenAttestationDocument>) => void;
  selectTemplateTab: (tabIndex: number) => void;
  print: () => void;
};
