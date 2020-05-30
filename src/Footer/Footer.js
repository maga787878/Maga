import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

export default function Footer() {
    return (
        <div className="container">
            <div className="row" style={{borderTop:"double",borderTopColor:"#29a744",textAlign:"center"}}>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6" style={{marginTop:"10px"}}><a href="https://github.com/maga787878"> <GitHubIcon color="action" style={{ fontSize: 30 }}/> </a>
                <a href="mailto:Buluddov@gmail.com"><EmailIcon color="action" style={{ fontSize: 30 }}/></a>
                <a href="https://www.instagram.com/mehemmed777__"><InstagramIcon color="action" style={{ fontSize: 30 }}/></a>
                    <a href="https://www.facebook.com/mehemmed.eloyev"><FacebookIcon color="action" style={{ fontSize: 30 }}/></a>
                    </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 col-6" style={{marginTop:"10px"}}><p>© 2020 Mahammad Aliyev</p></div>
            </div>
        </div>)
}
