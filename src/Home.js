import React from "react"
 
function Home(props) {

const imgCSS = {
  padding: "0",
  display: "block",
  margin: "0 auto",
  maxHeight: "50%",
  maxWidth: "50%",
}

  return (
    <div>
      <h1>Home</h1>
      <img src="\images\home\display-low-res.jpg" alt="me" style={imgCSS}></img>
    </div>
  )
}
 
export default Home;