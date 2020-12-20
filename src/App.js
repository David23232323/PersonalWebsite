import React from 'react';
import logo from './logo.svg';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Home from './Home.js'; 
import Hobbies from './Hobbies.js'; 
import About from './About.js'; 
import Interests from './Interests.js'; 

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <div className="navigation">
          <div className="navigation-sub">
              <a>David Cheung </a>
              <Link to="/" className="item">Home </Link>
              <Link to="/hobbies" className="item">Hobbies </Link>
              <Link to="/about" className="item">About</Link>
              <Link to="/interests" className="item">Interests</Link>

          </div>
          
        </div>

        <Route exact path="/" component={Home} />
        <Route path="/hobbies" component={Hobbies} />
        <Route path="/about" component={About} />
        <Route path="/interests" component={Interests} />


      </div>
    </BrowserRouter>
  );
}

export default App;
