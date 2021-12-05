import React from 'react';
import {
    Collapse,Navbar, NavbarToggler, NavbarBrand,
    Nav, NavItem, NavLink,
    UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem,
  } from "reactstrap";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import companylogo from './img/mangafanlogo.png';

export default function AppNavbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Navbar sticky="top" className="navbar-dark bg-dark px-5" expand="md">
            <NavbarBrand tag={Link} to="/">
                <img src={companylogo} alt="weblogo"/>
            </NavbarBrand>
            <NavbarToggler onClick={() => {setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="billboard">Billboard</NavLink>
                        </NavItem>
                        <NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nev caret>
                                    Help
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem href="about">About</DropdownItem>
                                    <DropdownItem href="#action/3.2">Request</DropdownItem>
                                    <DropdownItem divider/>
                                    <DropdownItem href="#action/3.3">Report</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </NavItem>
                    </Nav>
                </Collapse>
        </Navbar>
    )
}