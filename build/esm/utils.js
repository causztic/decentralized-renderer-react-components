import { defaultTemplate } from "./DefaultTemplate";
export const repeat = (times) => (callback) => Array(times)
    .fill(0)
    .map((_, index) => callback(index));
export const noop = () => void 0;
// Currently using https://stackoverflow.com/questions/326069/how-to-identify-if-a-webpage-is-being-loaded-inside-an-iframe-or-directly-into-t
export const inIframe = () => {
    try {
        return window.self !== window.top;
    }
    catch (e) {
        return true;
    }
};
export const isV2Document = (document) => {
    return !!document.$template;
};
export const isV3Document = (document) => {
    return !!document["@context"];
};
const getTemplateName = (document) => {
    if (isV2Document(document) && typeof document.$template === "object") {
        return document.$template.name;
    }
    if (isV3Document(document) && document.openAttestationMetadata.template) {
        return document.openAttestationMetadata.template.name;
    }
    return "";
};
export const isV2Attachment = (attachment) => {
    return !!attachment.type;
};
export const getAttachmentMimeType = (attachment) => {
    return isV2Attachment(attachment) ? attachment.type : attachment.mimeType;
};
const truePredicate = () => true;
// TODO this function is weird, returns current template + templates for attachments
export function documentTemplates(document, templateRegistry, attachmentToComponent) {
    if (!document)
        return [];
    // Find the template in the template registry or use a default template
    const templateName = getTemplateName(document);
    const selectedTemplate = (templateName && templateRegistry[templateName]) || [
        defaultTemplate,
    ];
    // Add type property to differentiate between custom template tabs VS attachments tab
    const tabsRenderedFromCustomTemplates = selectedTemplate
        .map((template) => {
        return { ...template, type: "custom-template" };
    })
        .filter((template) => (template.predicate ? template.predicate({ document }) : truePredicate()));
    const tabsRenderedFromAttachments = (document.attachments || [])
        .map((attachment, index) => isV2Attachment(attachment)
        ? {
            id: `attachment-${index}`,
            label: attachment.filename || "Unknown filename",
            type: attachment.type || "Unknown filetype",
            template: attachmentToComponent(attachment, document), // eslint-disable-line @typescript-eslint/no-non-null-assertion
        }
        : {
            id: `attachment-${index}`,
            label: attachment.fileName || "Unknown filename",
            type: attachment.mimeType || "Unknown filetype",
            template: attachmentToComponent(attachment, document), // eslint-disable-line @typescript-eslint/no-non-null-assertion
        })
        .filter((template) => template.template);
    return [...tabsRenderedFromCustomTemplates, ...tabsRenderedFromAttachments];
}
//# sourceMappingURL=utils.js.map