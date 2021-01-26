import React, { useState } from "react";
import { pdfjs } from 'react-pdf';
import resume from '../assets/resume.pdf'
import HyperLink from '../general_props/hyperlink'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

 
function Resume(props) {
  return (
    <div>
      <h1>Resume</h1>
      <div>
        <HyperLink additionalClassName="" link={resume} text="Open Resume in New Tab"></HyperLink>
      </div>
      <div className="m-auto">
        <center>
        <embed src={resume} width="800px" height="2100px"/>
        </center>
      </div>
    </div>
  )
}
 
export default Resume;