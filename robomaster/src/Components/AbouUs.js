import React, { Component, useState } from 'react';
import { Card, CardTitle, CardText, CardImg,CardGroup,CardBody, CardImgOverlay,Container,Col,Row, CardSubtitle,
Badge, Button, Modal, ModalHeader, ModalBody, ModalFooter,Toast, ToastBody, ToastHeader} from 'reactstrap';
import MEMBERS from './DB/Members';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {faAddressBook, faRobot, faJournalWhills} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

let members = MEMBERS();


/* Aditional for more information 
        <CardText className ="memberText">
        {member.background}
        </CardText>
*/



// Simple modal to dysplay Yuri's Story
const YuriStory = () => {


    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
        <Button size = "sm" color="danger" onClick={toggle}>Learn More <FontAwesomeIcon icon = {faRobot}/></Button>
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Yuri: The start of something big!</ModalHeader>
            <ModalBody>
                Knowing nothing, we built Yuri, learning everything as we went by. Fellow teams from north america helped us
                learn, and eventually, we managed to finish our first robot. We where not expecting much, but after we 
                finished building it, and had decent enough software, we started play... I mean, testing it, fixed some 
                things here and there, and got ready for the competition.
                And to the competition we went. However, as Covid had stoke, we couldn't go to china, therefore, we went 
                to the RMNA competition. Not expecting much, we went to play the 1v1.

                After the competition, we won first place on the 1v1 matches, something that took us completely by surprise. 
                We wouldn't have done anything as near as that if it was not for all of the NA RoboMaster teams that helped us, 
                our awesome Mentor Ariel, that helped solve some problems, and our amazing team! We are very graceful for each 
                and everyone of you, and we are open in case a new team now needs us.            
            </ModalBody>
            <ModalFooter>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
        </div>
    );
}





class AboutUs extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div>

                <div>
                    <br/>
                    <h1 >Meet the team:</h1>
                    <br/>
                </div>
                <CardGroup >


                {
                    
                    members.map((member) =>{
                        return(
                            <React.Fragment>
                            <Card color = "Secondary" >
                                <Row>
                                        <CardImg top width="100%" src={process.env.PUBLIC_URL+member.image} alt="MemeberPicture" />
                                        <CardBody>
                                            <CardTitle tag ="h1" >{member.name}</CardTitle>

                                            <CardSubtitle tag="h5">Field: {member.field}</CardSubtitle>

                                        </CardBody>
                                        
                                </Row>
                            </Card>
                            <br></br>
                            </React.Fragment>
                        );
                        
                    })

                    
                }
                </CardGroup>
                <br/>
                <br/>
                <br/>

                <Row>
                    <Col xs = "12" md = "6">
                        <h1>Our Team:</h1>
                        <br/>
                        <p>
                            We are a mexican team, built from the ground up by ourselves, we want to bring 
                            inspiration to more Mexicans, and get more people excited about robotics and all 
                            it has to offer.                        
                        </p>
                        <br/>
                        <Button color="primary" size="lg" block>
                            <Link to = "/aboutUs" className = "remove_undeline text-white">
                                Contact Us <FontAwesomeIcon icon = {faAddressBook}/>
                            </Link>
                        </Button>
                        <br/>                        

                    
                    </Col>
                    
                    <Col xs = "12" md = "6">
                        <h1>Map goes Here</h1>
                    </Col>
                </Row>
                <br/>
                <br/>
                <br/>
                <Row>
    
                    <h1>Our Story</h1>
                    <p>
                        In the search for more, we encountered Robomaster.
                        The founders came from the robotics team Taman Keet, a FIRST robotics team. 
                        From there, most of the Telpochcalli founders decided to set off in the search 
                        for a better and more challenging competition. We gathered ourselves and 
                        started from scratch, in the middle of a pandemic.
                        With only 11 people and a dream, we started planing everything, reading the 
                        documentation, gathering resources, and forming an official team.

                        It wasn't easy though, with no previous knowledge of how to start, and no resources, 
                        we had to start a team from practically thin air. But little by little, 
                        we finally built our first robot: Yuri. 
                    </p>
                    <Card inverse>
                        <CardImg width="100%" src={process.env.PUBLIC_URL+"/images/aboutUs/robot.png"} alt="Card image cap" />
                        <CardImgOverlay>
                            <Container>
                                <Col xs = {{size:6,offset:6}}>
            
                                    <div className="p-3 bg-dark my-2 rounded">
                                        <Toast>
                                        <ToastHeader>
                                            The first robot:
                                        </ToastHeader>
                                        <ToastBody>
                                            <YuriStory/>
                                        </ToastBody>
                                        </Toast>
                                    </div>
                                </Col>
                            </Container>
                        </CardImgOverlay>
                    </Card>

                </Row>
                <br/>
                <br/>
                <Row>
                    <Col xs = "12" md = "6">
                        <h1>Where we are</h1>
                        <p>
                            We are currently preparing to build 2 more robots, so that we can participate on the 3v3 
                            battles. We do not have much info as of now, but you can go to our blog to get more up to 
                            date news.
                        </p>
                    </Col>

                    <Col xs = "12" md = "6">
                        <h1>Where we are going</h1>
                        <p>
                            We are looking forward to becoming a 8 robot team, so that we can compete internationally 
                            on the full team league. Each robot has their own challenges and goals.
                        </p>
                    </Col>
                </Row>
                <br/>
                <br/>
                <br/>
                <Row>
                    <Col xs = {{size: 4, offset :4}}>
                        <Button color = "warning" size = "lg" block>Blog <FontAwesomeIcon icon = {faJournalWhills}/></Button>
                    </Col>
                </Row>
                <br/>
                <br/>
                <br/>

            </div>

        );
    };

}

export default AboutUs;
