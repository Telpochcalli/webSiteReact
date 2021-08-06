import React, { Component, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import {
    Jumbotron, Container, Row, Col,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Badge

} from 'reactstrap';


const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar light className="text-white" expand="md">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem >
                            <NavLink className="nav-link" to='/home'><p className="text-white navbarFont">Home</p></NavLink>
                        </NavItem>
                        <NavItem >
                            <a href="https://www.robomaster.com/en-US" className="remove_undeline"><p className="text-white navbarFont robomasterPosition" style = {{textDecoration:"none"}}>Robomaster</p></a>
                        </NavItem>
                        <NavItem >
                            <NavLink className="nav-link" to ="/aboutUs"><p className="text-white navbarFont">About us</p></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to='/home'><p className="text-white navbarFont">Support Us</p></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to='/home'><p className="text-white navbarFont">Blog</p></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  className="nav-link" to='/recruitment'><p className="text-white navbarFont">Become a member</p></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to='/contactUs'><p className="text-white navbarFont">Contact Us</p></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

/* Menu Diferentes Robots

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className="text-white navbarFont">
                                Robots
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Robot 1
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Robot 2
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Robot 3
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

*/


export default Navigation;