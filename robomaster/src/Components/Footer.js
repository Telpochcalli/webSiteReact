import React from 'react';
import {Row,Col,Container} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import { faEnvelope, faRobot,faChartLine, faJournalWhills,faPhoneVolume} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import MediaButtons from './MediaButtons';
import {Link} from "react-router-dom";
import MEDIA from "./DB/MEDIA.js"
// Facebook twitter instagram github mail

const media = MEDIA();

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
                        <Link to = "/recruitment"  className = "remove_undeline text-white fotterLabelsPosition">Become a member</Link>
                        <Link to = "/contactUs" className = "remove_undeline text-white fotterLabelsPosition">Contact Us</Link>

                    </Col>
                    <Col md = "3">
                        <p>All Rights Reserved 2021 ©</p>
                    </Col>
                
                </Row>
                <Row><div style={{ borderTop: "2px solid #fff ", marginLeft: 2, marginRight: 2 }}></div></Row>

                <MediaButtons parameters = {media}/>
        </div>
    );
}


/* Facebook will remain pending until new orders
                            <span>  <a className="btn btn-social-icon btn-facebook socialMediaButton" href="http://google.com/+" target="_blank"> <FontAwesomeIcon icon={faFacebookF} /></a>  </span>   

*/ 

export default Footer;
