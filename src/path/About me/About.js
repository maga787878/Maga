import React from 'react'
const About = props => {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>Who's this guy?</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">My name is Mahammad.</h4>
            <p>
            I figure, if you clicked the About link, you probably want to
        know a little more than my passion for tech. So here it goes.
        I'm a React Frontend web developer , I'm trying to do the best as a software.
         I'm doing miracles with react js.
          </p>
            <p>
              I really enjoy solving problems as well as making things pretty and easy to use. I
              can't stop learning new things; the more, the better. I also love photography, a hobby
              I'm taking along since the good old film cameras. 
              I have many specialties. my own travel agency company. 
          Photography. and I'm fine in the kitchen. 
          I solve my problems quickly.
           I know how to set up a new website and improve the old ones.
            </p>
          </div>
          <div className="title">
            <h3>What does he do?</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">I'm a programmer.</h4>
            <p>
              For the front-end I usually work with Javascript, either standalone or including
              popular frameworks like ReactJS. I also make the web pretty by using Sass,
              CSS and, whenever needed, any of their friends: Bootstrap, Reactstrap,Material UI,etc.
            </p>
            <p>
              For the back-end I also work with Javascript (NodeJS, Express, MongoDB, etc).
            </p>
          </div>
         </article>
      </div>
    </section>
  );
};

export default About