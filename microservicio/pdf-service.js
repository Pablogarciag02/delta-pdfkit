const PDFDocument = require("pdfkit");



function buildPDF(dataCallback, endCallback) {
    const doc = new PDFDocument();
    doc.on("data", dataCallback);
    doc.on("end", endCallback)
    doc
     .fontSize(25)
     .text("Texto que se genera en el pdf!");
    doc.end();


}

module.exports = {buildPDF}