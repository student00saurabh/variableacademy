const pdfFiles = [
  { id: 1, url: "/notes/cse-syllabus.pdf" },
  { id: 2, url: "/notes/cse-syllabus.pdf" },
  { id: 3, url: "/notes/notes2.pdf" },
];

// Function to load PDF preview
function loadPdfPreview(pdfFile) {
  const canvas = document.getElementById(`pdf-preview-${pdfFile.id}`);
  const ctx = canvas.getContext("2d");
  const downloadLink = document.getElementById(`download-link-${pdfFile.id}`);
  downloadLink.href = pdfFile.url;

  pdfjsLib
    .getDocument(pdfFile.url)
    .promise.then((pdf) => {
      return pdf.getPage(1);
    })
    .then((page) => {
      const viewport = page.getViewport({ scale: 1.5 });
      canvas.width = viewport.width;
      canvas.height = viewport.height;

      const renderContext = {
        canvasContext: ctx,
        viewport: viewport,
      };
      return page.render(renderContext);
    });
}

// Load all PDFs
pdfFiles.forEach(loadPdfPreview);
