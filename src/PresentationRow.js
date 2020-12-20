import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
 
function PresentationRow(props) {
  return (
    <div class="float-container">

      <div class="float-left">
          <img src={props.path}></img>
      </div>

      <div class="float-child">
        <span class="middle">{props.discription}</span>
      </div>

      <div class="float-child">
        <span class="right">{props.description}</span>
      </div>

    </div>
  )
}
 
export default PresentationRow;

