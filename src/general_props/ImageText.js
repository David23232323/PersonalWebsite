import React from 'react';
import '../App.css';
 
function ImageText(props) {

  return (
    <div className="container">

        <div className="content" style={{width: props.width}}>
            <a href={props.path} target="_blank">
            <div className="content-overlay" ></div> 

            <img className="content-image" src={props.path}>
            </img>
            <div className="content-details fadeIn-top">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            </a>
        </div>
    </div>

    
  )
}
 
export default ImageText;