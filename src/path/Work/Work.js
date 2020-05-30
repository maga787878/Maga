import React from "react";

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
        className="work1"
      >
        <div className="container">
          <h2
            style={{
              textAlign: "center",
              marginTop: "50px",
              paddingTop: "150px",
              fontSize: "80px",
              textShadow: "0px 1px 8px",
            }}
            className="work2"
          >
            Work
          </h2>
        </div>
      </div>
      <div className="container" style={{ textShadow: "0px 1px 8px" }}>
        <h3 style={{ textAlign: "center" }}>My Projects</h3>
        <p>
          From Web Components and to React.JS, Redux, Express.JS and Node.JS
          Check out my latest web software development portfolio projects.
        </p>
        <br />
        <div
          className="text-center container navbar navbar-expand-lg  row work"
          style={{ marginLeft: "50px" }}
        >
          <div className="col-7">
            <div
              class="card-group"
              style={{
                width: "18rem",
                boxShadow: "rgba(95, 107, 94, 0.63) 0px 0px 10px 9px",
                borderRadius: "30%",
              }}
            >
              <div class="card-body">
                <h5 class="card-title">Travel Wep site</h5>
                <p class="card-text">
                  React js ,React-Redux, Bootstrap, HTML5, CSS3 and JavaScript
                  ES6 . It is written with. <br></br>Click on the link to view
                  the codes
                </p>
                <a
                  href="https://github.com/maga787878/Octanus-React.git"
                  className="btn btn-success card-link"
                >
                  Git hub
                </a>
              </div>
            </div>
          </div>
          <div className="col-5">
            <div
              class="card-group workcard"
              style={{
                width: "18rem",
                boxShadow: "rgba(95, 107, 94, 0.63) 0px 0px 10px 9px",
                borderRadius: "30%",
              }}
            >
              <div class="card-body">
                <h5 class="card-title">My Wep site</h5>
                <p class="card-text">
                  React JS , Bootstrap, HTML5 and CSS3. It is written with.{" "}
                  <br></br>Click on the link to view the codes
                </p>
                <a
                  href="https://github.com/maga787878/Maga.git"
                  className="btn btn-success card-link"
                >
                  Git hub
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="text-center container navbar navbar-expand-lg  row work2"
          style={{ marginLeft: "50px", marginTop: "15px" }}
        >
          <div className="col-7">
            <div
              class="card-group"
              style={{
                width: "18rem",
                boxShadow: "rgba(95, 107, 94, 0.63) 0px 0px 10px 9px",
                borderRadius: "30%",
              }}
            >
              <div class="card-body">
                <h5 class="card-title">Json</h5>
                <p class="card-text worktext">
                  Node JS and Express JS. It is written with. <br></br>Click on
                  the link to view the codes
                </p>
                <a
                  href="https://github.com/maga787878/login---server"
                  className="btn btn-success card-link"
                >
                  Git hub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
