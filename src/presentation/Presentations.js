import React from 'react';
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
                {presentationPath: "\presentations\Fermi Paradox.pptx",
                  previewPath: "/images/presentations/fermi_preview.jpg",
                  presentationName: "Fermi's Paradox",
                  description: "What is the Fermi's Paradox, and what are the proposed solutions. Through examamining the solutions to Fermi's Paradox I also explore some interesting ideas like symbiogenesis of the mitocondria, game theory and nuclear weapons, space junk, and limits of space travel",
                  date: "10/20/2020"
                }
              ]}
     />

    </div>
  )
}
 