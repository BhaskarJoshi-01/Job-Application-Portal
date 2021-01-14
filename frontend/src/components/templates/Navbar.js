import React, { useLayoutEffect, useState, Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container, Row, Col, Button, Badge } from 'react-bootstrap';
// import "bootstrap/dist/css/bootstrap.min.css"
import logo from './logo.jpg'

function NavBar() {
    return (
        <div style={{ backgroundColor: "#F8F9FA" }}>

            <div style={{ width: "100%", backgroundColor: "white", position: 'sticky', top: '0px', zIndex: '10' }}>

                <div style={{ width: "100%", borderBottom: "0.8px solid #e5e7eb", backgroundColor: "inherit", padding: "6px", display: "sticky", top: "0" }}>
                    <Navbar style={{ maxWidth: "1400px", margin: "auto" }} bg="inherit" expand="md" className="pl-8">
                        <Navbar.Brand href="#home" style={{ flexGrow: '1' }} className="mr-sm-5" >
                            <img
                                alt=""
                                src={logo}
                                width="60"
                                height="60"
                                className="d-inline-block align-top "
                            />{' '}
                            <h1 style={{ margin: '0 0 0 5px', fontSize: '40px', color: 'black', display: 'inline' }}>Valo - The Job Application Portal</h1>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ border: "2px solid gray" }} />

                        <Navbar.Collapse className="justify-content-end-md mt-xs-3" >
                            <Nav className="ml-auto">
                                <Nav.Link style={{ fontSize: "20px", fontWeight: 'light' }} href="/register" className="mr-3 ml-1"><i class="fas fa-user-plus" style={{ marginRight: "10px" }}></i>Register</Nav.Link>
                                <Nav.Link style={{ fontSize: "20px", fontWeight: 'light' }} href="/login"  ><i class="fas fa-sign-in-alt" style={{ marginRight: "10px" }}></i>Login</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                </div>

            </div>
        </div>


    );
}
export default NavBar;
