import React from 'react'
import { Row, Col, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Register from './Register';
import './my.css';
import { Redirect } from "react-router-dom";
export default function Submit(props) {
    const setRegister=()=>{
        <Register/>
        
        console.log("calleldldldld")
    }
    return (
        <div>
            <div id="submit">
                            <Dropdown id="dropdown-basic-button" title="Submit">
                            <Dropdown.Toggle  style={{backgroundColor:`${props.data.type}`,border:'none'}} id="dropdown-basic">
                            <span style={{fontSize:13,fontWeight:'bold'}}><AddCircleIcon style={{color:'white',borderRadius:'50%'}}/> Submit</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item  id="Dropdown"><b onClick={()=>setRegister()}>Deals</b></Dropdown.Item>
                                <Dropdown.Item id="Dropdown"><b onClick={()=>setRegister()}>Discussions</b></Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown></div>
        </div>
    )
}
