export default function PDFViewer({ pdfUrl }: { pdfUrl: string }) {
  console.log(pdfUrl);

  return <iframe className="md:p-4" src={pdfUrl} width="100%" height="500px" />;
}
