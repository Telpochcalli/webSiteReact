import React from 'react';
import {Row,Col,Container} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import { faEnvelope, faRobot,faChartLine, faJournalWhills,faPhoneVolume} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import Navigation from './Navigation';
import {Link} from "react-router-dom";

// Facebook twitter instagram github mail

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 3
        }}
    />
);
//<ColoredLine color = {"white"}/>
//<span><a href="https://www.robomaster.com/en-US" ><p className="text-white" style = {{textDecoration:"none"}}>Robomaster</p></a></span>


function Footer(){
    return(
        <div className ="footer Jumbo">
                <Row>
                    <Col md = "9">
                        <Link to = "/home" className = "remove_undeline text-white fotterLabelsPosition">Home</Link>
                        <span  className ="fotterLabelsPosition"><a href="https://www.robomaster.com/en-US" className = "remove_undeline text-white">Robomaster</a></span>
                        <Link to="/aboutUs" className = "remove_undeline text-white fotterLabelsPosition">About Us</Link>
                        <Link className = "remove_undeline text-white fotterLabelsPosition">Support Us</Link>
                        <Link className = "remove_undeline text-white fotterLabelsPosition">Blog</Link>
                        <Link  className = "remove_undeline text-white fotterLabelsPosition">Become a member</Link>
                        <Link className = "remove_undeline text-white fotterLabelsPosition">Contact Us</Link>

                    </Col>
                    <Col md = "3">
                        <p>All Rights Reserved 2021 ©</p>
                    </Col>
                
                </Row>
                <Row><div style={{ borderTop: "2px solid #fff ", marginLeft: 2, marginRight: 2 }}></div></Row>

                <Row>
                    <Col>
                            <span>  <a className="btn btn-social-icon btn-twitter socialMediaButton" href="https://twitter.com/TelpochcalliRM" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>  </span>
                            <span>  <a className="btn btn-social-icon btn-flickr socialMediaButton" href="https://www.instagram.com/telpochcalli_robotics/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>  </span>   
                            <span>  <a className="btn btn-social-icon btn-github socialMediaButton" href="https://github.com/Telpochcalli" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>  </span>   
                            <span>  <a className="btn btn-social-icon btn-reddit socialMediaButton" href="http://google.com/+" target="_blank"><FontAwesomeIcon icon={faEnvelope} /></a>  </span> 
                    </Col>

                </Row>
        </div>
    );
}


/* Facebook will remain pending until new orders
                            <span>  <a className="btn btn-social-icon btn-facebook socialMediaButton" href="http://google.com/+" target="_blank"> <FontAwesomeIcon icon={faFacebookF} /></a>  </span>   

*/ 

export default Footer;
