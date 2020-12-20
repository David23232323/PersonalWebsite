import React from 'react';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.css';
 
function Hobbies(props) {
  return (
    // Render a Thumbnail component
    <div>
      <h1>Hobbies</h1>
      <Thumbnail
        link="/twitter"
        image="https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/twitter-logo.png"
        title="Twitter Newsfeed"
        category="Mobile App"
      />
    </div>
  )
}
 
export default Hobbies;