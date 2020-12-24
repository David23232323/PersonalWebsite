import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
 
// function PresentationRow(props) {
//   return (
//     <div class="float-container" style={{clear:"both"}}>

//       <div style={{width:"33%", float: "left"}}>
//           <a href={props.presentationPath} download={props.presentationName}><img src={props.previewPath} /></a>
//       </div>

//       <div style={{width:"33%", float: "left", margin: "auto", textAlign: "center"}}>
//         <span class="middle">{props.description}</span>
//       </div>

//       <div style={{width:"33%", float: "left"}}>
//         <span class="right">{props.date}</span>
//       </div>

//     </div>
    
//   )
// }

function PresentationRow(props) {

  return (
    <div class="float-container" style={{clear:"both"}}>

      <table>
        <tr> 
          <td>          
            <a href={props.presentationPath} download={props.presentationName}><img src={props.previewPath} /></a>
          </td>
          <td>
            <span class="middle">{props.description}</span>
          </td>
          <td>
            <span class="right">{props.date}</span>
          </td>
        </tr>
      </table>
    </div>
    
  )
}
 
export default PresentationRow;

