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
        <img src=".\images\home\display-low-res.jpg" alt="mee" style={imgCSS}></img>  
      </div>
      <div>
        <h3>About This Site</h3>
        <p>I made this website to learn the React framework. But also, having an website is always nice to have for people who want to do a little stalking.</p>
        <p>Unfortunately this site is not mobile friendly and uses hover effects which probably won't work well on mobile</p>

      </div>
    </div>
  )
}
 
export default Home;