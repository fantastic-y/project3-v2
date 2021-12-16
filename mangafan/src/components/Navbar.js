import React from 'react';
import {
    Collapse,Navbar, NavbarToggler, NavbarBrand,
    Nav, NavItem, NavLink,
    UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem,
  } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import companylogo from './img/mangafanlogo.png';

export default function AppNavbar() {
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
                            <NavLink href="billboard">Billboard</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="news">News</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="request">Request</NavLink>
                        </NavItem>
                        <NavItem>          
                        <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle caret>
                                    Log In
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem href="#action">My Profile</DropdownItem>
                                    <DropdownItem href="/booklists">My Booklist</DropdownItem>
                                    <DropdownItem divider/>
                                    <DropdownItem href="#action/3.3">Log Out</DropdownItem>
                                </DropdownMenu>
                        </UncontrolledDropdown>
                        </NavItem>
                    </Nav>
                </Collapse>
        </Navbar>
    )
}