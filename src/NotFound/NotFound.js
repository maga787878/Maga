import React from "react";
import NotFoundd from "../img/16.png";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <img src={NotFoundd} alt="..." style={{ width: "100%" }} />
      <div>
        <Link
          to="/"
          className="btn btn-success col-xl-1 col-lg-1 col-md-1 col-sm-1 col-1"
          style={{ marginLeft: "320px", marginBottom: "40px" }}
        >
          {" "}
          Home{" "}
        </Link>
      </div>
    </div>
  );
}
