import React from 'react';
import '../App.css';
import HobbyBlock from './HobbyBlock.js'
import Gallery from "react-photo-gallery";
import { photos } from "./photos";


 
function Hobbies(props) {
  return (
    // Render a Thumbnail component
    <div>
      <h1>Hobbies</h1>
      <HobbyBlock
        title={"Skiing"}
        content={[{title: "sup",
                  description: "hello",
                  path: "/images/hobbies/ski1.jpg"}, 
                  {title: "sup",
                  description: "hello",
                  path: "/images/hobbies/ski2.jpg"},
                  {title: "sup",
                  description: "hello",
                  path: "/images/hobbies/ski3.jpg"},
                  // {title: "sup",
                  // description: "hello",
                  // path: "/images/hobbies/ski4.jpg"},
                  ]} >
      </HobbyBlock>
      <HobbyBlock
        title={"Photography (mostly astrophotography)"}
        content={[{title: "sup",
                  description: "hello",
                  path: "/images/hobbies/star1.jpg"}, 
                  {title: "sup",
                  description: "hello",
                  path: "/images/hobbies/star2.jpg"},
                  {title: "sup",
                  description: "hello",
                  path: "/images/hobbies/sh1.jpg"},
                  ]} >
      </HobbyBlock>
      <HobbyBlock
        title={"Sports"}
        content={[{title: "sup",
                  description: "hello",
                  path: "/images/hobbies/bike2.jpg"}, 
                  {title: "sup",
                  description: "hello",
                  path: "/images/hobbies/climb.jpg"},
                  {title: "sup",
                  description: "hello",
                  path: "/images/hobbies/kayak.jpg"}
                  ]} >
      </HobbyBlock>
      <HobbyBlock
        title={"Hiking/Camping"}
        content={[{title: "sup",
                  description: "hello",
                  path: "/images/hobbies/volcano.jpg"}, 
                  {title: "sup",
                  description: "hello",
                  path: "/images/hobbies/behind.jpg"},
                  {title: "sup",
                  description: "hello",
                  path: "/images/hobbies/cracked.jpg"}
                  ]} >
      </HobbyBlock>
      <div className="clear-both">
        <h3>All Pics</h3>
        {/* <Gallery photos={photos} /> */}
        <Gallery photos={photos} />

      </div>
    </div>

    

  )
}
 
export default Hobbies;