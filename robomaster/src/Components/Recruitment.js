import React from 'react';
import { Row,Col, Container, Button, List } from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import { faPollH} from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';
import REQUIREMENTS from './DB/Requirements';
import RequirementList from './RequirementList';


const req = REQUIREMENTS();



const Recruitment = () =>{
    return(
        <div>
            <Row>
                <Col xs = "12" md = "6">
                    <br/>
                    <h1 className ="centeredTitles">We are glad you are interested!</h1>
                    <Container>
                        <p className = "textJustify">
                            As far as our recruitment goes, we are currently oppened for new applications. 
                            New applications done after september 24th will not be considered until we do 
                            another recruitment phase.
                            If you want to jump right into it, you can simply fill out our official 
                            recruitment form (will require an active Tec account):
                        </p>
                    </Container>
                    <Button color="primary" size="lg" block>
                        <a className = "remove_undeline text-white" href ="https://docs.google.com/forms/d/e/1FAIpQLSeCc6plX1zf10RClD2dFuNun5lOjh-4eJ4GZmLVi7zv_SJDng/">
                            Join Now <FontAwesomeIcon icon = {faPollH}/>
                        </a>
                    </Button>
                </Col>
                <Col  xs = "12" md = "6">
                    <br/>
                    <h1 className ="centeredTitles">Have any questions? We can answer them!</h1>
                    <Container>
                        <p>
                            Our main way to communicate and answer questions is though our Discord server. 
                            Here, you can give yourself the possible recruit role, and ask us any question.
                        </p>
                    </Container>
                    <Button color="primary" size="lg" block>
                        <a className = "remove_undeline text-white" href = "https://discord.com/invite/G7NFJUbD">
                            Join our Discord! <FontAwesomeIcon icon = {faDiscord}/> 
                        </a>
                    </Button>
                

                </Col>
            </Row>
            <br/>
            <Row>
                <Container>
                    <h1 className ="centeredTitles">Steps for joining:</h1>
                    <br/>
                    <Col xs = "12" md = {{size : 6,offset:3}}>
                        <h3>
                            Joining a new team might be difficult, but we tried to make it as easy 
                            as possible. This are the steps that you will need to follow:                    
                        </h3>
                        <br/>





                        
                        <h4>Step 1: Getting to know where you want to join</h4>
                        <p>
                            Knowing what you want to do inside the team is critical. As a 
                            working robotics team, we are divided into the following sections:
                        </p>





                        <h5>Programming / Electrical</h5>
                        <p className = "textJustify">
                            As part of the programming team, you would work directly on the code of the robot (c++).
                            We also need people that know how to work on computer vision (Python) and AI. You do not 
                            need to be an expert, but have a little of the following requirements, if you don't know anything about 
                            that, you can still go though out interview, and if you have other aptitudes we like about you, we will 
                            certainly let you i
                        </p>
                        <Container>
                            <RequirementList array = {req.Programming}/>
                        </Container>






                        <h5>Mechanical</h5>
                        <p className = "textJustify">
                            As part of the mechanical side of the team, you will be able to directly work on one of 3 robots, 
                            from design to completion. As part of the knowhow, we need to work on CAD software, knowing how 
                            to cut pieces of material, and designing everything.
                        </p>

                        <Container>

                            <RequirementList array = {req.Mechanic}/>
                        </Container>




                        <h5>Business</h5>
                        <p className = "textJustify">
                            As of now, we do not have a well established business division, meaning that as part of the business 
                            team, you will be in charge of setting priorities for expenses, getting sponsors, and building a strong 
                            image and business side of the team. Part of your actions will be talking to possible sponsors, managing 
                            social media, marketing the team and making strategies.
                        </p>


                        <Container>
                            <RequirementList array = {req.Bussiness}/>
                        </Container>


                        <h6>Additionally, you will need to:</h6>
                        <Container>
                            <RequirementList array = {req.Extra}/>
                        </Container>


                        <h4>Step 2: Applying</h4>
                        <p>
                            Knowing what you want to do inside the team is critical. As a 
                            working robotics team, we are divided into the following sections:
                        </p>
                        <h6>Make yourself shine!</h6>
                        <br/>
                        <Button color="primary" size="lg" block>
                            <a href="https://forms.gle/WePr3HM1TEFmUKkE9" className = "remove_undeline text-white">
                                Join Now <FontAwesomeIcon icon = {faPollH}/>
                            </a>
                        </Button>
                        <br/>
                        <br/>






                        
                        <h4>Step 2.5: Step 2.5: Joining our discord community</h4>
                        <p  className = "textJustify">
                            As part of our team, discord is our main way to communicate, give announcements, and hang out with other 
                            teams from North America. Here is where all the meeting happen, and it is the easiest way to solve any of 
                            your questions. In case you do not know, you can go to The discord website and learn some stuff about it. 
                            Also, you might be interested in checking their knowing Discord tutorial. You can also give yourself the 
                            "New recruits" tag so that you never miss important notifications on #bienvenida and reacting with the buff 
                            doge emoji
                        </p>

                        <br/>
                        <Button color="primary" size="lg" block>
                            <a  href = "https://discord.com/invite/G7NFJUbD" className = "remove_undeline text-white">
                                Join our Discord! <FontAwesomeIcon icon = {faDiscord}/> 
                            </a>
                        </Button>
                        <br/>
                        <br/>



                        <h4>Step 3: Interview</h4>
                        <p className = "textJustify">
                            Once you have applied, we will contact you through email, there, a member of our team will go through 
                            your application and will get to know you better. The email will contain details on when and how to meet 
                            us, when, and everything you will need to know.
                            As for how the interview will be made, it is something much more personal, from one or two of our members, 
                            we will get to know you better, and decide on what you would fit best.
                        </p>



                        <h4>Step 4: Interview</h4>
                        <p className = "textJustify">
                            Time to celebrate!
                            We will contact you through email and tell you that you are officially on out team, with better details 
                            on the ceremony (place, time, and all of that good stuff). After that, we will all get together!
                            If you have made it this far, you will officially be a new team member. We will then introduce you to 
                            all of our team, you will have the opportunity to ask any other questions, and we will try our best to 
                            catch you up on what we have been doing.
                        </p>


                    </Col>

                </Container>
            </Row>

            <br/>



        
        </div>
    );
}


export default Recruitment;