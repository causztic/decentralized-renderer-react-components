// actions sent by host to frame
import { createStandardAction } from "typesafe-actions";
export const renderDocument = createStandardAction("RENDER_DOCUMENT")();
export const selectTemplate = createStandardAction("SELECT_TEMPLATE")();
export const getTemplates = createStandardAction("GET_TEMPLATES")();
export const print = createStandardAction("PRINT")();
// I think we can just remove the argument typing, so we are just downloading the html
export const downloadPDF = createStandardAction("DOWNLOAD_PDF")();
//# sourceMappingURL=host.actions.js.map