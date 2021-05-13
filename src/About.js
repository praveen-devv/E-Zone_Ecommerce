import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'
import about from './about.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

function About() {
    return (
        <div className="about">
            <div >
                <img src={about} className="about_img"/>
            </div>
            <div className="about_desc">
                <h1>About Us</h1>
                <div className="about_p">
                    <p className="about_pOne">E Zone was Established by Mr.P. Palanisamy with a qualified and experienced professionals to offer best products and services. 
                        Which is required in this current Growing IT and industrial segments. 
                        The company was established in November during the year 2009 at Coimbatore, TamilNadu
                    </p>
                    <p className="about_pTwo">
                    We provide customers with over many home accessories like Laptops, Invertors, Batteries , CCTV cameras and many other products.
                    We also offer customers a lifetime service , an assurance of exceptional after sales service - which can be availed easily by connecting to us.
                    </p>
                </div>
                <div className="about_social">
                        <Link to="">
                            <FacebookIcon className="social_a" fontSize="large"/>
                        </Link>
                        <Link to="">
                            <InstagramIcon className="social_a social_insta_a" fontSize="large"/>
                        </Link>
                        <Link to="">
                            <LinkedInIcon className="social_a" fontSize="large"/>
                        </Link>
                        <Link to="">
                            <TwitterIcon className="social_a" fontSize="large"/>
                        </Link> 
                </div>

            </div>   
        </div>
    )
}

export default About
