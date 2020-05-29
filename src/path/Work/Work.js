import React from "react";
import { Link } from "react-router-dom";

const style = {
    li:{border:"none",background:"#d7d8d8"}
}

export default function Work() {
  return (
    <div>
      <div
        style={{
          marginTop: "15px",
          background: "#3d3c5d7a",
          height: "370px",
          boxShadow: "0px 0px 10px 9px #5f6b5ea1",
        }}
      >
        <div className="container">
          <h2 style={{textAlign:"center",marginTop:"50px",paddingTop:"150px", fontSize:"80px",textShadow: "0px 1px 8px"}}>Work</h2>
        </div>
      </div>
      <div className="container" style={{textShadow:"0px 1px 8px"}}>
      <h3 style={{textAlign:"center"}}>My Projects</h3>
      <p>
        
      From Web Components and to React.JS, Redux, Vue.JS, Express.JS and Node.JS Check out my latest web software development portfolio projects.
      </p><br/>

      <div className="text-center container navbar navbar-expand-lg  row"  style={{marginLeft:"50px"}}>
        <div className="col-7">
        <div class="card" style={{width: "18rem",boxShadow:"rgba(95, 107, 94, 0.63) 0px 0px 10px 9px",borderRadius:"30%"}}>
  <div class="card-body">
    <h5 class="card-title">Travel Wep site</h5>
    <p class="card-text">React js ,React-Redux, Bootstrap, HTML5, CSS3 and JavaScript ES6 . It is written with. <br></br>Click on the link to view the codes</p>
    <Link to="" className="btn btn-success card-link">Git hub</Link>
  </div>
</div>
        </div>
        <div className="col-5">  <div class="card" style={{width: "18rem",boxShadow:"rgba(95, 107, 94, 0.63) 0px 0px 10px 9px",borderRadius:"30%"}}>
  <div class="card-body">
    <h5 class="card-title">My Wep site</h5>
    <p class="card-text">React JS , Bootstrap, HTML5 and CSS3. It is written with. <br></br>Click on the link to view the codes</p>
    <Link to="" className="btn btn-success card-link">Git hub</Link>
  </div>
</div>
</div>
     

      </div>
      <div className="text-center container navbar navbar-expand-lg  row" style={{marginLeft:"50px",marginTop:"15px"}}>
      <div className="col-7">
        <div class="card" style={{width: "18rem",boxShadow:"rgba(95, 107, 94, 0.63) 0px 0px 10px 9px",borderRadius:"30%"}}>
  <div class="card-body">
    <h5 class="card-title">Json</h5>
    <p class="card-text">Node JS and Express JS. It is written with. <br></br>Click on the link to view the codes</p>
    <Link to="https://github.com/maga787878/login---server" className="btn btn-success card-link">Git hub</Link>
  </div>
</div>
        </div>
        <div className="col-5">
        <div class="card" style={{width: "18rem",boxShadow:"rgba(95, 107, 94, 0.63) 0px 0px 10px 9px",borderRadius:"30%"}}>
  <div class="card-body">
    <h5 class="card-title">Travel Wep site</h5>
    <p class="card-text">React js ,React-Redux, Bootstrap, HTML5, CSS3 and JavaScript ES6 . It is written with. <br></br>Click on the link to view the codes</p>
    <Link to="" className="btn btn-success card-link">Git hub</Link>
  </div>
</div>
        </div>
        
         </div>
      <p>I'm a React Frontend web developer , I'm trying to do the best as a software. I'm doing miracles with react js. I have many specialties. my own travel agency company. Photography. and I'm fine in the kitchen. I solve my problems quickly. I know how to set up a new website and improve the old ones.</p>
      <h3>My skills:</h3>
      <ul className="list-group col-3" style={{textAlign:"center"}}>
  <li className="list-group-item" style={style.li}>React js</li>
  <li className="list-group-item" style={style.li} >React-Redux</li>
  <li className="list-group-item" style={style.li}>Redux-Thunk</li>
  <li className="list-group-item" style={style.li}>Reactstrap</li>
  <li className="list-group-item" style={style.li}>Bootstrap</li>
  <li className="list-group-item" style={style.li}>HTML5</li> 
  <li className="list-group-item" style={style.li}>CSS3</li>
  <li className="list-group-item" style={style.li}>SASS</li>
  <li className="list-group-item" style={style.li} >JavaScript ES6+</li>
  <li className="list-group-item" style={style.li}>Node js</li>
  <li className="list-group-item" style={style.li}>Express js</li>
  <li className="list-group-item" style={style.li}>Babel</li>
  <li className="list-group-item" style={style.li}>GIT</li>
  <li className="list-group-item" style={style.li}>Rest Api</li>
</ul>
      </div>
    </div>
  );
}
