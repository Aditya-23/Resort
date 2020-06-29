import React, { Component } from 'react'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

export default class Navs extends Component {
    constructor(props){
        super(props)
        this.state = {
            Open : true
        }
    }
    toggleHandler = () => {
        this.setState(() => {
            return ({Open : !this.state.Open})
        })
    }
    render() {
        return (
            <Navbar color="light" light expand="lg">
                <img src={logo} alt="Resort"/>
                <NavbarToggler onClick={() => this.toggleHandler()}/>
                <Collapse isOpen={this.state.Open} navbar>
                    <Nav tabs className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/rooms/">Rooms</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about/">About Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/careers/">Work With Us</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}
