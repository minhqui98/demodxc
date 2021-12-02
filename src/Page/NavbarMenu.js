import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import { Button, Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, UncontrolledDropdown } from 'reactstrap';

function NavbarMenu(props) {
    return (
        <div>
            <Navbar
                color="warning"
                expand
                fixed=""
                light
            >
                <NavbarBrand href="/">
                    reactstrap
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() { }} />
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <Link style={{textDecoration:"none",color:"black"}} to="/detail">
                                Components
                            </Link>
                        </NavItem>
                    </Nav>
                    <Button color="primary">
                    <Link style={{textDecoration:"none",color:"white"}} to="/login">
                                Login
                            </Link>
                    </Button>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavbarMenu;