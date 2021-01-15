import React, { useState } from "react";
import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';
import PDF from 'react-pdf-js-infinite';

import sample from '../assets/resume.pdf'



pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


 
function Resume(props) {
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  return (
    <div>
      <h1>Resume</h1>
      <div>
        <a href={sample} target="_blank">Open Resume in New Tab</a>
      </div>
      <div className="m-auto">
        {/* <Document
          file={sample}
          onLoadError={console.error}
        >
        <Page pageNumber={pageNumber} />

        </Document>  */}
        <center>
        <embed src={sample} width="800px" height="2100px"/>
        </center>


      </div>
    </div>
  )
}
 
export default Resume;