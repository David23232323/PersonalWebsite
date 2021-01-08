import React from 'react';
import PresentationTable from './PresentationTable.js';
import PresentationRow from './PresentationRow.js'; 
import './Presentation.css'
import '../App.css';
 
export default function Presentations(props) {
  return (
    // Render a Thumbnail component
    <div className="border-4 border-black">
      <h1>Presentations</h1>
      <div className="m-auto w-8/12"> 
        <p className="italic">During quarantine, my friend Michael proposed that each week, a person gives a presentation on any subject that they are interested in. Below are the presentation that I have given.</p>
      </div>


{/*   
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
     /> */}

      <div className="m-auto w-8/12">
        <span className="float-left font-bold ml-3">Presentation</span>
        <span className="float-right font-bold mr-3">Date</span>
        <PresentationRow
          presentationPath = {"/presentations/Axiom_of_Choice.pptx"}
          previewPath = {"/images/presentations/aoc_preview.jpg"}
          presentationName = {"Axiom of Choice"}
          description = {"This is a presentation on the Axiom of Choice and its equivalents (Well Ordering Thorem/Zorn's Lemma) and some fun probelms you can solve with it"}
          date = {"10/20/2020"}
        >
        </PresentationRow>
        <PresentationRow
          presentationPath = {"/presentations/Fermi_Paradox.pptx"}
          previewPath = {"/images/presentations/fermi_preview.jpg"}
          presentationName = {"Fermi's Paradox"}
          description = {"What is the Fermi's Paradox, and what are the proposed solutions? Through examamining the solutions to Fermi's Paradox I also explore some interesting ideas like symbiogenesis of the mitocondria, game theory and nuclear weapons, space junk, and potential hard limits of space travel."}
          date = {"10/20/2020"}
        >
        </PresentationRow>
      </div>
    </div>
  )
}
 