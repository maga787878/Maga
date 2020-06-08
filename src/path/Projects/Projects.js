import React from 'react'
import Maga from "../img/maga.jpg"
import Travel from "../img/travelimg.jpg"


/***********************
  Project Component
 ***********************/

const Project = props => {
  const tech = {
    sass: 'fab fa-sass',
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    react: 'fab fa-react',
    vue: 'fab fa-vuejs',
    d3: 'far fa-chart-bar',
    node: 'fab fa-node'
  };

  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return (
    <div className="project">
      <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
        <img className="project-image" src={props.img} alt={'Screenshot of ' + props.title} />
      </a>
      <div className="project-details">
        <div className="project-tile">
          <p className="icons">
            {props.tech.split(' ').map(t => (
              <i className={tech[t]} key={t} />
            ))}
          </p>
          {props.title}{' '}
        </div>
        {props.children}
        <div className="buttons">
          <a href={repo} target="_blank" rel="noopener noreferrer">
            View source <i className="fas fa-external-link-alt" />
          </a>
        </div>
      </div>
    </div>
  );
};



/***********************
  Projects Component
 ***********************/

const Projects = props => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">My Works</h3>
          <p className="separator" />
          <p className="subtitle">
            Here's a list of <u>most</u> of the projects I've been working on lately. 
          </p>
        </div>
        <div className="projects-wrapper">
          <Project
            title="My Portfolio."
            img={Maga}
            tech="js css react node"
            link="http://mahammadaliyev.cf"
            repo="https://github.com/maga787878/Maga.git"
          >
            <small>
            React js ,React-Redux, Bootstrap, HTML5, SCSS and JavaScript
                  ES6 . It is written with. <br></br>Click on the link to view
                  the codes
            </small>
            <p>
            This is my portfolio. There is so much about me here.
            </p>
          </Project> 
          <Project
            title="Travel wep site."
            img={Travel}
            tech="js css react node"
            link="https://github.com/maga787878/Octanus-React.git"
            repo="https://github.com/maga787878/Octanus-React.git"
          >
            <small>
            React JS ,React-Redux,JavaScript ES6,Material UI HTML5 and CSS3. It is written with.{" "}
                  <br></br>Click on the link to view the codes
            </small>
            <p>
            There are travels, visa, transfers and many other services here.
            </p>
          </Project>
         </div>
      </div>
    </section>
  );
};


export default Projects