import React from 'react';
import {
    Collapse,Navbar, NavbarToggler, NavbarBrand,
    Nav, NavItem, NavLink,
    UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle
  } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import companylogo from './img/mangafanlogo.png';

export default function AppNavlog(props) {
    const [isOpen, setIsOpen] = React.useState(false);
    
    return (
        <Navbar sticky="top" color="dark" dark expand="md">
            <NavbarBrand href="/">
                <img src={companylogo} alt="weblogo"/>
            </NavbarBrand>
            <NavbarToggler onClick={() => {setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/billboard">Billboard</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/news">News</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/request">Request</NavLink>
                        </NavItem>
                    </Nav>
                    <NavItem>          
                        <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle caret>
                                    Welcome {/* {this.props.location.user} */}
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem href="/booklists">My Booklist</DropdownItem>
                                    <DropdownItem divider/>
                                    <DropdownItem 
                                        onClick={() => props.handleLogOut()}
                                    >Log Out</DropdownItem>
                                </DropdownMenu>
                        </UncontrolledDropdown>
                        </NavItem>
                </Collapse>
        </Navbar>
    )
}