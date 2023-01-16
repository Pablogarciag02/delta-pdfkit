const express = require("express");
const pdfService = require("../microservicio/pdf-service")

const router = express.Router();
router.get("/invoice", (req, res, next) => {
    const respuesta = res.writeHead(200, {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=invoice.pdf"
    })

    pdfService.buildPDF(
        (chunk) => respuesta.write(chunk),
        () => respuesta.end()
    );
});

module.exports = router;