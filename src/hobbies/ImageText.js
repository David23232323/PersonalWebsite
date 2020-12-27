import React from 'react';
import '../App.css';
 
function ImageText(props) {
    const contentStyle = {
        position: "relative",
        width: "90%",
        maxWidth: "400px",
        margin: "auto",
        overflow: "hidden",
      };

    const contentOverlayStyle = {
        background: "yellow",
        position: "absolute",
        height: "99%",
        width: "100%",
        left: "0",
        top: "0",
        bottom: "0",
        right: "0",
        opacity: "0",
        transition: "all 0.4s ease-in-out 0s"
      };

  const topFade = {
    top: "20%"
  }

  const containerCSS = {
    maxWidth: "30%"
  }
      

  return (
    <div class="container" style={containerCSS}>

        <div class="content" style={contentStyle}>
            <a href={props.path} target="_blank">
            <div class="content-overlay" ></div> 

            <img class="content-image" src={props.path}>
            </img>
            <div class="content-details fadeIn-top" style={topFade}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            </a>
        </div>
    </div>

    
  )
}
 
export default ImageText;