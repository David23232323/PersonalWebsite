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
      <div>
        <img src="\images\home\display-low-res.jpg" alt="me" style={imgCSS}></img>  
      </div>
      <div>
        <h3>About This Site</h3>
        <p>I made this website to learn the React framework. But also, having an website is always nice to have for people who want to do a little stalking.</p>
      </div>
    </div>
  )
}
 
export default Home;