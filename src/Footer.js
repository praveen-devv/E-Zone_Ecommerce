import React from 'react'
import './Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Link } from 'react-router-dom';
import logo from './logo.png'

function Footer() {
    return (
        <div className="footer">
            <div className="footer_cont">
                <div className="footer_left">
                    <div className="footer__desc">
                        <img className="footer_logo" src={logo} />
                        <p>We provide customers with over many home accessories like Laptops, Invertors, Batteries , CCTV cameras and many other products.We also  offer customers a lifetime service , an assurance of exceptional after sales service - which can be availed easily by connecting to us.</p>
                    </div>
                    <div className="footer__social">
                        <Link to="">
                            <FacebookIcon className="social" fontSize="large"/>
                        </Link>
                        <Link to="">
                            <InstagramIcon className="social social_insta" fontSize="large"/>
                        </Link>
                        <Link to="">
                            <LinkedInIcon className="social" fontSize="large"/>
                        </Link>
                        <Link to="">
                            <TwitterIcon className="social" fontSize="large"/>
                        </Link> 
                    </div>
                </div>
                <div className="footer_right">
                    <div className="footer_rightCont">
                        <Link to="/" style={{textDecorationLine:'none'}}><p>Home</p></Link>
                        <Link to="/about" style={{textDecorationLine:'none'}}><p>About</p></Link>
                        <Link to="/contact" style={{textDecorationLine:'none'}}><p>Contact</p></Link>
                    </div>
                    <div >
                        <Link to="/login" style={{textDecorationLine:'none'}}><p>Sign In</p></Link>
                        <Link to="/signUp" style={{textDecorationLine:'none'}}><p>Sign Up</p></Link>
                        <Link to="/Privacy" style={{textDecorationLine:'none'}}><p>Privacy Policy</p></Link>
                    </div>
                </div>
            </div>
            <div className="copyrights">
                <p>© Copyright 2021 E Zone. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer
