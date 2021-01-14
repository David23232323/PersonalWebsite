import React from 'react';
import '../App.css';
import HobbyBlock from './HobbyBlock.js'
import Gallery from "react-photo-gallery";
import { photos } from "./photos";


 
function Hobbies(props) {
  // const photos = [
  //   {
  //     src: '/images/hobbies/star1.jpg',
  //     width: 4,
  //     height: 3
  //   },
  //   {
  //     src: '/images/hobbies/star1.jpg',
  //     width: 1,
  //     height: 1
  //   }
  // ];
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
                  path: "/images/hobbies/star1.jpg"}, 
                  {title: "sup",
                  description: "hello",
                  path: "/images/hobbies/star2.jpg"}
                  ]} >
      </HobbyBlock>
      <HobbyBlock
        title={"Hiking/Camping"}
        content={[{title: "sup",
                  description: "hello",
                  path: "/images/hobbies/star1.jpg"}, 
                  {title: "sup",
                  description: "hello",
                  path: "/images/hobbies/star2.jpg"}
                  ]} >
      </HobbyBlock>
      <div className="clear-both"><p>hi</p>
        {/* <Gallery photos={photos} /> */}
        <Gallery photos={photos} />

      </div>
    </div>

    

  )
}
 
export default Hobbies;