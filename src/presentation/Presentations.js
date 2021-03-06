import React from 'react';
import PresentationTable from './PresentationTable.js';
import PresentationRow from './PresentationRow.js'; 
import './Presentation.css'
import '../App.css';
 
export default function Presentations(props) {
  
  return (
    // Render a Thumbnail component
    <div className="">
      <h1>Presentations</h1>
      <div className="m-auto w-8/12"> 
        <p className="italic">During quarantine, my friend <a className="underline hover:text-blue-600" target="_blank" href="https://michaelkronovet.com/">Michael</a> proposed that each week, a person gives a presentation on any subject that they are interested in. Below are the presentation that I have given.</p>
      </div>

      <div className="m-auto w-8/12">
        <span className="float-left font-bold ml-3">Presentation</span>
        <span className="float-right font-bold mr-3">Description</span>
        <PresentationRow
          presentationPath = {"presentations/Axiom_of_Choice.pptx"}
          previewPath = {"images/presentations/aoc_preview.jpg"}
          presentationName = {"Axiom of Choice"}
          description = {"  This is a presentation on the Axiom of Choice and its equivalents (Well Ordering Thorem/Zorn's Lemma) and some fun probelms you can solve with it"}
          date = {"10/20/2020"}
        >
        </PresentationRow>
        <PresentationRow
          presentationPath = {"presentations/Fermi_Paradox.pptx"}
          previewPath = {"images/presentations/fermi_preview.jpg"}
          presentationName = {"Fermi's Paradox"}
          description = {"  What is the Fermi's Paradox, and what are the proposed solutions? Through examamining the solutions to Fermi's Paradox I also explore some interesting ideas like symbiogenesis of the mitocondria, game theory and nuclear weapons, space junk, and potential hard limits of space travel."}
          date = {"10/20/2020"}
        >
        </PresentationRow>
        <PresentationRow
          presentationPath = {"presentations/Finance101.pptx"}
          previewPath = {"images/presentations/stonk_preview.jpg"}
          presentationName = {"Finance 101 (coming soon)"}
          description = {"  What are Stonks? More generally what are some basic financial instruments and terms that a college student managing their own finances should know. Covered in this presentations are credit cards (various perks, optimizing cash back, credit score), rates, APR vs APY, saving/checking accounts (their features and what to look for), what stonks are, basic valuation, short selling, and options. I can't claim that this is everything that a college student/young adult should know about finances because I don't know what I don't know. Further, this presentation does not cover any advice on allocation of money as different people have different risk tolerances. But hopefully my friends found this presentation useful."}
          date = {"4/20/2021"}
        >
        </PresentationRow>
      </div>
    </div>
  )
}
 