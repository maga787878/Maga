import React from 'react'
import {Link} from 'react-router-dom'
import Logo from "../img/mlog.png";

const Nav = props => {
    return (
      <React.Fragment>
        <nav id="navbar">
          <div className="nav-wrapper">
          <Link className="navbar-brand" to="/" style={{ color: "#2b7127" }}>
              <img
                src={Logo}
                alt="."
                style={{ borderRadius: "77%", height: "32px", width: "60px" }}
              ></img>
            </Link>
            <a
              onClick={props.toggleMenu}
              className={props.showMenu === 'active' ? 'menu-button active' : 'menu-button'}
            >
              <span />
            </a>
          </div>
        </nav>
      </React.Fragment>
    );
  };

  export default Nav