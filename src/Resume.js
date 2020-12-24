import React, { useState } from "react";
import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';

import sample from './1.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


 
function About(props) {
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  return (
    <div>
      <Document
        file={sample}
        onLoadError={console.error}
      >
                <Page pageNumber={pageNumber} />

    </Document>

    </div>
  )
}
 
export default About;