import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import ImageText from './ImageText.js'; // Import the Thumbnail component
 
function HobbyBlock(props) {
  const blockCSS = {
    clear: "left"
  }
  const content = []
  for (const [index, picture] of props.content.entries()) {
    content.push(<ImageText key={index}
    title={picture.title}
    description={picture.description}
    path={picture.path} >
    </ImageText>)
  }


  return (
    <div style={blockCSS}>
      <h3>{props.title}</h3>
      <div>{content}</div>
    </div>
  )
}
 
export default HobbyBlock;
