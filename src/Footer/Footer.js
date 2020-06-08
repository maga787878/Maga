import React from 'react'
import SocialLinks from "../path/Contact/SocialLinks"




const Footer = props => {
    return (
      <footer>
        <div className="wrapper">
          <h3>THANKS FOR VISITING</h3>
          <p>© {new Date().getFullYear()} Mahammad Aliyev.</p>
          <SocialLinks />
        </div>
      </footer>
    );
  };
  
  
  export default Footer