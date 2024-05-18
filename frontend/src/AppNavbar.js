import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const nameAndSectionStyle = {
            position: 'absolute',
            top: '20px',
            right: '105px', 
            color: '#ffffff'
        };

        return (
            <Navbar color="dark" dark expand="md">
                <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
                <div style={nameAndSectionStyle}>
                    ALDWWIN S. ESPAÑOLA - BSIT3A
                </div>
            </Navbar>
        );
    }
}