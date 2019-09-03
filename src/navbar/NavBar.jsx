import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    const id = localStorage.getItem('id');
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Contact App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {id ?
                <NavItem>
                  <Link to="/contacts">My Contacts</Link>
                </NavItem>
                : null}
              <NavItem className="ml-2">
                <Link to={"/"}>{id ? "Logout" : "Login"}</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}