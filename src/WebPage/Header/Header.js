import React from 'react';
import {Button,Navbar, Nav,Row} from 'react-bootstrap';
import India from '../India';
import Register from '../Register';
import Submit from '../Submit';
import flag from '../images/usaflag.jpg';

import '../my.css'
export default function Header(props) {
    return (
        <div>
            <div id='header'>
                <Navbar id='headsize' bg="light" expand="lg">
                    <Navbar.Brand href="#home"><a className="navbar-brand" href="#"><span style={{ color: 'rgb(208,12,39)', fontSize: '30px' }}><b>Deals</b></span><sapn style={{ color: 'rgb(0,31,126)' }}><b>.com</b></sapn></a></Navbar.Brand>
                    <Navbar.Toggle className='togglehead' aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#link"><Submit data={{ type: props.data.type }} /></Nav.Link>
                            <Nav.Link href="#link"><India data={{ type: props.data.type }} /></Nav.Link>
                            <Nav.Link href="#link"><Register data={{ type: props.data.type }} /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                </div>
            <div>
            <div style={{height:'auto',paddingBottom:10,width:'100%',backgroundImage:`url(${flag})`}}>
                <div>
                <h3 style={{ paddingTop: 90}}><span style={{ color: 'lightgrey' }}><b>{props.data.text}</b>
                </span></h3>
                </div>
                    <div>
                    <form ><input id="search" style={{textIndent:20}} type="text" placeholder='Search'/>
                        <Button style={{ marginLeft: 10,height:45 ,borderRadius:7,border:'none',backgroundColor:`${props.data.type}`}} ><b>Search</b></Button></form>
                        </div>
            </div>
            </div>
        </div>
    )
}
