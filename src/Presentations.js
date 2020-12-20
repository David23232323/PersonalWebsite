import React from 'react';
import PresentationRow from './PresentationRow.js'; // Import the Thumbnail component
import './App.css';
 
function Presentations(props) {
  return (
    // Render a Thumbnail component
    <div>
      <h1>Presentations</h1>
      <PresentationRow
        path="\images\home\display-low-res.jpg"
        description="This is a presentation on the Axiom of Choice and its equivalents (Well Ordering Thorem/Zorn's Lemma) 
                    and some fun probelms you can solve with it"
        date="10/20/2020"
      />
    </div>
  )
}
 
export default Presentations;