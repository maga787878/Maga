import React, { Component } from 'react'
import Maga from '../img/maga2.jpg'
import {Link} from 'react-router-dom'


const style= {
    h:{fontSize:"4.5rem",marginTop:"50px",textShadow: "0px 1px 8px",color: "#333333"},
    img:{marginLeft:"33%",borderRadius:"50%",marginTop:"30px",height:"380px"},
h2:{textShadow:"0px 1px 8px",color: "#333333",textAlign:"end",fontSize:"3rem",marginTop:"30px"}}

export default class Information extends Component {

    
    render() {
        return (
            <div className="container">
                <div style={{justifyContent:"center"}}> 
                    <h1 style={style.h}>Mahammad Aliyev</h1>
                    <div className="col-9" >
                        <img style={style.img} src={Maga} alt="..."></img>
                       
                 </div>
                 <h2 className="col-9" style={style.h2}>React js Frontend Developer</h2>
                </div>
                <div className="container navbar navbar-expand-lg justify-content-between row" style={{marginTop:"30px"}}>

               <Link to="work" className="btn btn-success col-2"> My Work</Link>
               <Link to="work" className="btn btn-success col-2">About Me</Link> 
               <Link to="work" className="btn btn-success col-2">Contact</Link> 
               </div>
            </div>
        )
    }
}
