import React from 'react'
import SocialLinks from "./SocialLinks"



const Contact = props => {
  return (
    <section id="contact">
      <div className="container">
        <div className="heading-wrapper">
          <div className="heading">
            <p className="title">
              Want to <br />
              contact me?
            </p>
            <p className="separator" />
            <p className="subtitle">
            Thank you for losing my contact with me.
             I love my job and i am ready to do my best.
              <br></br> Email: Buluddov@gmail.com 
              <br></br> Tel:+994(55)919-02-87
       
            </p>
          </div>
          <SocialLinks />
        </div>
        {/* <form id="contact-form" action="#">
          <input placeholder="Name" name="name" type="text" required />
          <input placeholder="Email" name="email" type="email" required />
          <textarea placeholder="Message" type="text" name="message" />
          <input className="button" id="submit" value="Submit" type="submit" />
        </form> */}
      </div>
    </section>
  );
};

export default Contact
