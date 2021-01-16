import React from 'react';
import logo from './logo.svg';
// Import the BrowserRouter, Route and Link components
import { HashRouter , Route, Link } from 'react-router-dom'; 
import Home from './Home.js'; 
import Hobbies from './hobbies/Hobbies.js'; 
import Books from './book/books.js'; 

// import Hobbies from './Hobbies.js'; 

import About from './About.js'; 
import Interests from './Interests.js'; 
import Presentations from './presentation/Presentations.js';
import Resume from './resume/Resume.js';



import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <div className="navigation">
          <div className="navigation-sub">
              <Link to="/" style={{backgroundColor: "#a33f00"}} className="item">David Cheung  </Link>

              <Link to="/" className="item">Home </Link>
              <Link to="/hobbies" className="item">Hobbies </Link>
              {/* <Link to="/about" className="item">About</Link> */}
              <Link to="/books" className="item">Book</Link>
              <Link to="/interests" className="item">Interests</Link>
              <Link to="/Presentations" className="item" activeStyle={{color: 'red'}}>Presentations</Link>
              <Link to="/Resume" className="item">Resume</Link>

          </div>
          
        </div>

        <Route exact path="/" component={Home} />
        <Route path="/hobbies" component={Hobbies} />
        {/* <Route path="/about" component={About} /> */}
        <Route path="/books" component={Books} />
        <Route path="/interests" component={Interests} />
        <Route path="/presentations" component={Presentations} />
        <Route path="/resume" component={Resume} />




      </div>
    </HashRouter>
  );
}

export default App;
