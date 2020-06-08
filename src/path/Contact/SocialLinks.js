import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

const SocialLinks = props => {
    return (
      <div className="social">
        <a href="https://github.com/maga787878"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's Github profile"
        >
           <GitHubIcon className="fab" color="action" /> 
        </a>
        <a href="mailto:Buluddov@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's E-Mail profile"
        >
          <EmailIcon color="action" style={{ fontSize: 30 }}/>
        </a>
        <a href="https://www.instagram.com/mehemmed777__"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's Instagram profile"
        >
          <InstagramIcon color="action" style={{ fontSize: 30 }}/>
        </a>
        <a href="https://www.facebook.com/mehemmed.eloyev"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's Facebook profile"
        >
           <FacebookIcon color="action" style={{ fontSize: 30 }}/>
        </a>
      </div>
    );
  };

  
  export default SocialLinks