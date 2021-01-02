import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
 
function PresentationTable(props) {
  var tableTitles = []
  var content = []
  for (const [index, title] of props.title.entries()) {
    tableTitles.push(<th key={index}>{title}</th>)
  }

  for (const [index, row] of props.content.entries()) {
    content.push(<tr key={index}>
                  <td key={index}><a href={row.presentationPath} download={row.presentationName}><img src={row.previewPath} /></a></td>
                  <td key={index}>{row.description}</td>
                  <td key={index}>{row.date}</td>
                </tr>)
  }


  return (
    <div style={{clear:"both"}}>
      <table className="w-4/5 m-auto space-y-5">
        <tbody>
          <tr className="gap-y-1">
            {tableTitles}
          </tr>
          {content}
        </tbody>
      </table>
      
    </div>
    
  )
}
 
export default PresentationTable;

