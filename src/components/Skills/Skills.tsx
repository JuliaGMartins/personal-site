import React from 'react';
import './Skills.css';
// import Icon from '../Icon/Icon';
import jsIcon from '../../images/js-icon.png';
import css from '../../images/css2.png';
import git from '../../images/Git-Icon.png';
import react from '../../images/react.png';
import ts from '../../images/typescript.png';
import html from '../../images/html.png';

function Skills() {
  return (
    
    <div>
      <h1>
        Hard Skills
      </h1>
      <div className="row">
        <div className="one">
          <h5>
          <img className='Icon' src={html} alt="html"></img>
          <br></br>
           HTML
          </h5>
        </div>
        <div className="two">
          <h5>
          <img className='Icon' src={css} alt="css"></img>
          <br></br>
          CSS
        </h5>
        </div>
        <div className="three">
          <h5>
          <img className='Icon' src={react} alt="ReactJs"></img>
          <br></br>
          ReactJS
        </h5>
        </div>
        <div className="four">
           <h5>
          <img className='Icon' src={git} alt="Git"></img>
          <br></br>
          Git
        </h5>
        </div>
        <div className="five">
          <h5>
          <img className='Icon' src={jsIcon} alt="Javascript"></img>
          <br></br>
          Javascript
          {/* <Icon url={jsIcon}/> */}
        </h5>
        </div>
        <div className="six">
          <h5>
          <img className='Icon' src={ts} alt="Typescript"></img>
          <br/>
          Typescript
        </h5>
        </div>
        
      </div>
    </div>
  )
}

export default Skills;