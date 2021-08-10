import React, {Component} from 'react';
import Location from './Location';
import {Row,Container,Col,Button,Toast, ToastBody} from 'reactstrap';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import MediaButtons from './MediaButtons'
import MEDIA from "./DB/MEDIA.js"


const media = MEDIA();


class ContactPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        return(
            <div>
                <br/>
                <br/>
                <Row>

                    <h1>Visit Us:</h1>
                    <br/>
                    <br/>
                    <Col xs = {{size:8,offset:2}}>
                        <Location/>
                    </Col>
                    <br/>
                </Row>
                <br/>
                <Row>
                    <h1 className ="centeredTitles">Have any questions? <br/> We can answer them!</h1>
                    <Col md = {{size:8,offset:2}}>
                        <Container>
                        <p className = "textJustify">
                            You can contact us in may ways. You are more than welcome to contact us at anytime and for any reason, 
                            we will do our best to answer as best and quickly as possible. If you want to learn 
                            more about us, follow us on social media!
                            However, we are a small team and we will take a while to answer.
                            If you wish, you can send us an email to: telpochcalli.robotics@gmail.com
                            Otherwise, if you wish to, you can follow us on our social media, we have the following options:
                        </p>
                        </Container>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col md = {{size:8,offset:4}} xs = {{size:10,offset:1}}>
                        <div className="p-3 bg-info my-1 rounded">
                            <Toast>
                                <MediaButtons parameters = {media}/>
                            </Toast>
                        </div>  
                    </Col>
            
                </Row>
                <br/>
                <br/>

                <Row>
                    <Col xs = {{size:8,offset:2}}>
                        <p className = "textJustify">
                            If you want to be part of our community, and follow us closer, we have our discord server
                            , where we chat, share memes, and we can answer questions quicker:
                        </p>

                        <Button color="primary" size="lg" block>
                            <a className = "remove_undeline text-white" href = "https://discord.com/invite/G7NFJUbD">
                                Join our Discord! <FontAwesomeIcon icon = {faDiscord}/> 
                            </a>
                        </Button>
                    </Col>
                </Row>
                <br/>
            </div>
        )
    }

}


export default ContactPage;
