import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import ImageText from '../general_props/ImageText.js'; // Import the Thumbnail component
 

function HobbyBlock(props) {
  const blockCSS = {
    clear: "left"
  }
  const content = []
  for (const [index, picture] of props.content.entries()) {
    content.push(<ImageText key={index}
    title={picture.title}
    description={picture.description}
    path={picture.path}
    width={"80%"} >
    </ImageText>)
  }
  
  return (
    <div className="clear-both">
      <h3>{props.title}</h3>
      <div className="flex flex-wrap justify-center">{content}</div>
    </div>
  )
}
 
export default HobbyBlock;
