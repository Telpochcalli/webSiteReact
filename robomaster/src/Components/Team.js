import React, { Component, useState } from 'react';
import { Card, CardTitle, CardText, CardImg,CardGroup,CardBody, CardImgOverlay,Container,Col,Row, CardSubtitle,
Badge
} from 'reactstrap';
import MEMBERS from './DB/Members';


let members = MEMBERS();





/*



*/

class Team extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div>
                <Card inverse>
                    <CardImg width="100%" src="/images/white front right shoot.png" alt="Card image cap" />
                    <CardImgOverlay>
                    <Container>
                        <Col xs = {{size :5,offset:7}}>

                            <br/>
                            <CardTitle tag ="h4" className="robotOverlay">Who are we?</CardTitle>
                            <CardText className = "robotOverlayText aling-text-right">
                            We are a mexican team, built from the ground up by ourselves, we want to bring inspiration to more Mexicans, and get more people excited about robotics and all it has to offer.
                            </CardText>

                        </Col>
                    </Container>

                    </CardImgOverlay>
                </Card>

                <div className = "Jumbo">
                    <br/>
                    <h1 >Meet the team:</h1>
                    <br/>
                </div>
                <CardGroup className ="homeBackground">


                {
                    
                    members.map((member) =>{
                        return(
                            <Container>
                            <Card color = "info" >
                                <Row>
                                    <Col xs = "4" className = "Jumbo">
                                        <CardImg top width="100%" src={member.image} alt="MemeberPicture" />
                                    </Col>
                                    <Col xs = "8">
                                        <CardBody>
                                            <CardTitle tag ="h1" >{member.name}</CardTitle>

                                            <CardSubtitle tag="h2">Field: {member.field}</CardSubtitle>
                                            <CardText className ="memberText">
                                            {member.background}
                                            </CardText>
                                        </CardBody>
                                        
                                    </Col>
                                </Row>
                            </Card>
                            <br></br>
                            </Container>
                        );
                        
                    })

                    
                }
                </CardGroup>
                </div>
        );
    };

}

export default Team;
