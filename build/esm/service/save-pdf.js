import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
//import { getLogger } from "../logger";
// const { trace } = getLogger("FramedDocumentRenderer");
// const getDimensionsToCenterImage = (doc: jsPDF, canvas: HTMLCanvasElement) => {
//   const pageWidth = doc.internal.pageSize.getWidth();
//   const pageHeight = doc.internal.pageSize.getHeight();
//   const widthRatio = pageWidth / canvas.width;
//   const heightRatio = pageHeight / canvas.height;
//   let ratio = Math.min(widthRatio, heightRatio);
//   const canvasWidth = canvas.width * ratio;
//   const canvasHeight = canvas.height * ratio;
//   const marginX = (pageWidth - canvasWidth) / 2;
//   const marginY = (pageHeight - canvasHeight) / 2;
//   return { marginX, marginY, canvasWidth, canvasHeight };
// };
export const savePdf = async (element) => {
    if (element == null)
        return;
    // Old code for full image to occupy the whole page
    const canvas = await html2canvas(element);
    const imageData = canvas.toDataURL("image/svg+xml");
    const pdf = new jsPDF("p", "mm", "a4");
    const width = pdf.internal.pageSize.getWidth();
    const height = pdf.internal.pageSize.getHeight();
    pdf.addImage(imageData, "PNG", 0, 0, width, height);
    pdf.save("download.pdf");
    // const { marginX, marginY, canvasWidth, canvasHeight } = getDimensionsToCenterImage(pdf, canvas);
    // trace({ marginX, marginY, canvasWidth, canvasHeight });
    // pdf.addImage(imageData, "svg", marginX, marginY, canvasWidth, canvasHeight, "FAST");
    // pdf.save("cert.pdf");
};
//# sourceMappingURL=save-pdf.js.map