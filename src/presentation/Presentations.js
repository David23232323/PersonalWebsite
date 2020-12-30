import React from 'react';
import PresentationRow from './PresentationRow.js'; // Import the Thumbnail component
import PresentationTable from './PresentationTable.js'; // Import the Thumbnail component

import '../App.css';
 
export default function Presentations(props) {
  return (
    // Render a Thumbnail component
    <div>
      <h1>Presentations</h1>


     <PresentationTable
      title = {["Presentation", "Description", "Date"]}
      content ={[{presentationPath: "\presentations\Axiom of Choice.pptx",
                  previewPath: "/images/presentations/aoc_preview.jpg",
                  presentationName: "Axiom of Choice",
                  description: "This is a presentation on the Axiom of Choice and its equivalents (Well Ordering Thorem/Zorn's Lemma) and some fun probelms you can solve with it",
                  date: "10/20/2020"
                },
                {presentationPath: "\presentations\Axiom of Choice.pptx",
                  previewPath: "/images/presentations/aoc_preview.jpg",
                  presentationName: "Axiom of Choice",
                  description: "This is a presentation on the Axiom of Choice and its equivalents (Well Ordering Thorem/Zorn's Lemma) and some fun probelms you can solve with it",
                  date: "10/20/2020"
                }
              ]}
     />

    </div>
  )
}
 