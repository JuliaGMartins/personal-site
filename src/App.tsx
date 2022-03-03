import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Introduction from './components/Introduction/Introduction';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-row">
          <div className="one">
            <Router>
              <Introduction/>
              <br/>
              <hr/>
              <Contact/>
            </Router>
          </div>
          <div className="two">
          <div className="vl"></div>
          </div>
          <div className="three">
            <Router>
              <AboutMe/>
              <hr/>
              <Skills/>
            </Router>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;