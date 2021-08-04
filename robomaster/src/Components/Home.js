import React,{Component} from "react";
import {Row,Col,
Card, CardTitle, CardText, CardImg, CardImgOverlay, Button} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {faHandsHelping, faJournalWhills, faUsers} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';


/* the las version may someday be useful
const Team = (props) => {
    return (
        <div>
        <Card color = "primary">
            <CardBody className ="text-white">
                <CardTitle tag="h1">Telpochcalli</CardTitle>
                <CardSubtitle tag="h4" className="mb-2 text-gray">Our Story:</CardSubtitle>
            </CardBody>
            <img width="100%" src={process.env.PUBLIC_URL + '/images/team.JPG'} alt="Card image cap" />
            <CardBody className ="text-white">
            <CardText>
                In the search for more, we encountered Robomaster.The founders came from the robotics team Taman Keet, a 
                FIRST robotics team. From there, most of the Telpochcalli founders decided to set off in the search for a better and more challenging 
                competition. We gathered ourselves and started from scratch, in the middle of a pandemic.
                With only 11 people and a dream, we started planing everything, reading the documentation, gathering resources, and forming an official team.
                It wasn't easy though, with no previous knowledge of how to start, and no resources, we had to start a team from practically thin air.
                But little by little, we finally built our first robot: Yuri.
            </CardText>
            </CardBody>
        </Card>
        </div>
    );
};
*/


const ImageOverlay = (props) => {
    return (
        <div>
        <Card inverse className ="header-content">
            <CardImg width="100%" src={process.env.PUBLIC_URL+"/images/homec/index-header.png"} alt="Card image cap" />
            <CardImgOverlay className = "">
                <Col md = "5" sm = "7">
                    <CardTitle tag="h1" >Official Team Website</CardTitle>        
                </Col>
            </CardImgOverlay>
        </Card>
        </div>
    );
};





class Home extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                    <Row>
                        <ImageOverlay/>
                    </Row>
                    <Row>
            
                        <Col md = "7" xs = "12">
                            <img src = {process.env.PUBLIC_URL + "/images/homec/mechanics.png"} className ="homeImages"/>
                        </Col>
                        <Col md = "5" xs = "12">
                            <br/>
                            <h1>Our Vision</h1>
                            <br/>
                            <p>
                                We are looking towards bringing robotics to Mexico. By using fun and challenging projects,
                                we look to inspire, learn, educate and innovate on how people think about robots.
                                By creating different kinds of robots and competing on international grounds, we want to 
                                bring the light to our country, and show our worth. As of now, we are a small team, however,
                                we hope that moving forward we can make a big team! if you want to learn more about us, go 
                                to the about us page
                            </p>
                            <br/>
                            <Button color="primary" size="lg" block>
                                <Link to = "/aboutUs" className = "remove_undeline text-white">
                                    About us <FontAwesomeIcon icon = {faUsers}/>
                                </Link>
                            </Button>

                            <br/>
                        </Col>
                    </Row>

                    <Row>
                        <Col md = "5" xs = "12">
                            <br/>
                            <h1>Mission</h1>
                            <br/>
                            <p>
                                We are aiming to go towards a team with the entire 8 robots. This way, we can compete on the 
                                most challenging yet exciting RoboMaster competition. As of now, we only have one of the basic
                                robots, but we have learned a lot with it.
                                Making other programs such as taking robotics to other schools and teaching locally is also
                                important for us, we want to one day show more young minds to collaborate, build and imagine 
                                with us. If you want to learn more about what steps we are taking towards getting there, you 
                                might want to check out our blog!
                            </p>
                            <br/>
                            <Button color = "warning" size="lg" block>Blog <FontAwesomeIcon icon = {faJournalWhills}/></Button>
                            <br/>
                        </Col>

                        <Col md = "7" xs = "12">
                            <img src = {process.env.PUBLIC_URL+ "/images/homec/robot-landing.png"} className ="homeImages"/>
                        </Col>
                    </Row>
                
                    <Row>
            
                        <Col md = "7" xs = "12">
                            <img src = {process.env.PUBLIC_URL+"/images/homec/business.png"} className ="homeImages"/>
                        </Col>
                        <Col md = "5" xs = "12">
                            <br/>
                            <h1>Want to help?</h1>
                            <br/>
                            <p>
                                We might be new, but we are going in strong! If you want to help us on our journey, you can follow us
                                on social media, or is you want to be a part of the team, contact us below!
                                If you want to help even more, you might want to consider becoming out sponsor! If that is the case, we
                                really appreciate your support, and for that reason we want to give back. To learn more, go to the become
                                a sponsor page.
                            </p>
                            <br/>
                            <Button color="success" size="lg" block>Become a Sponsor <FontAwesomeIcon icon = {faHandsHelping}/></Button>

                            <br/>
                        </Col>
                    </Row>
        
            </div>
            );

    }

}

/*




*/

export default Home;