import React,{Component} from "react";
import { UncontrolledCarousel, Container, Row,
Card, CardText, CardBody, CardLink,CardTitle, CardSubtitle} from 'reactstrap';

const items = [{src:"images/carousel/Robot.JPG",header:"noticia1"},{src:"images/carousel/shay.jpg",header:"noticia2"}]


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


class Home extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className ="homeBackground">
                <Container>
                    <Row>
                        <UncontrolledCarousel items = {items}/>
                    </Row>
                    <Row>
                        <Team/>
                    </Row>
                </Container>
                
            </div>
            );

    }

}


export default Home;