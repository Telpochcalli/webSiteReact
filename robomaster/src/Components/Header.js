import React, { Component, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Navigation from './Navigation';
import {Jumbotron, Row, Col} from 'reactstrap';



const Header = () => {

    return (

                <Jumbotron className ="Jumbo">
                    <Row>
                        <Col md = "4">
                            <img src={process.env.PUBLIC_URL + '/images/logo-telpochcalli-2.png'} width="200" alt="logo" className="header-logo"></img>
                        </Col>
                        <Col md = "auto">
                            <Navigation className="navbarPad"/>
                        </Col>

                    </Row>
                
                </Jumbotron>



    );
}

export default Header;
