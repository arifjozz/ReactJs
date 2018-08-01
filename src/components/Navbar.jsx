import React from 'react';
import '../App.css';
import { Button } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  //   UncontrolledDropdown,
  //   DropdownToggle,
  //   DropdownMenu,
  //   DropdownItem
} from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" style={divStyle}>
          <NavbarBrand href="/">
            <img
              src="http://i63.tinypic.com/oid9xu.png"
              height="50px"
              alt="logo"
            />&nbsp;&nbsp; Santren Koding
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Kajian Koding</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Santren Kilat</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Mondok</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Tentang Kami
                </NavLink>
              </NavItem>
              <NavItem>
                <Button outline color="primary">
                  Login/Signup
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
var divStyle = {
  position: 'fixed',
  width: '100%',
  zIndex: '100'
};
