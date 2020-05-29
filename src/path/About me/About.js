import React from 'react'
const style = {
    li:{border:"none",background:"#d7d8d8"}
}

export default function About() {
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
          <h2 style={{textAlign:"center",marginTop:"50px",paddingTop:"150px", fontSize:"80px",textShadow: "0px 1px 8px"}}>About Me</h2>
        </div>
      </div>
      <div className="container" style={{textShadow:"0px 1px 8px"}}>
      <h3>Who I Am?</h3>
      <p>
        <span>Hi,</span>
        <br></br> I figure, if you clicked the About link, you probably want to
        know a little more than my passion for tech. So here it goes.
      </p><br></br>
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
    )
}
