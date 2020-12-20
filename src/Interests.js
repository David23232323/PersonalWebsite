import React from "react"
import Collapsible from 'react-collapsible';

 
function Interests(props) {
  return (
    <div>
        <h1>Interests</h1>
        <div>
            <Collapsible trigger="Astronomy">
                <p>blah blah blah stars</p>
            </Collapsible>
            <Collapsible trigger="Physics">
                <p>blah blah blah physics</p>
            </Collapsible>
            <Collapsible trigger="human physcology">
                <p>blah blah blah stars</p>
            </Collapsible>
            <Collapsible trigger="Economics">
                <p>blah blah blah economics</p>
            </Collapsible>
        </div>
    </div>

    
  )
}
 
export default Interests;