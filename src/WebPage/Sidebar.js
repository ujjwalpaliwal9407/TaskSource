import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
export default function Sidebar() {
    return (
        <div>
            <h1>Discussions</h1>
          <br></br>
          <div style={{ height:'auto' ,marginRight:10,marginTop:10  , width:300 , border:'1px solid lightgrey' , backgroundColor:'white',borderRadius: '10px'}}>
            <div style={{marginTop:10}}>
            <Row><div>
            <Row><Col><h6>bbbbbbbbbbbbbbbbbbb<br/>bbbbbbbbbbbbbbbbbb</h6></Col></Row>
            <Row><Col></Col>
            <Col xs={2}><Button variant="light"><AccountCircleTwoToneIcon/></Button></Col><Col xs={6}><span style={{color:'grey'}}><b>Last updated 2 days ago by jay</b></span></Col><Col xs={2} style={{marginRight:10}}><a href='#'><Button variant='danger'><ChatBubbleOutlineIcon/></Button></a></Col><Col></Col></Row>
            </div>
            </Row>
            </div>
            <div style={{marginTop:10}}>
            <Row><div>
            <Row><Col><h6>bbbbbbbbbbbbbbbbbbb<br/>bbbbbbbbbbbbbbbbbb</h6></Col></Row>
            <Row><Col></Col>
            <Col xs={2}><Button variant="light"><AccountCircleTwoToneIcon/></Button></Col><Col xs={6}><span style={{color:'grey'}}><b>Last updated 2 days ago by jay</b></span></Col><Col xs={2} style={{marginRight:10}}><a href='#'><Button variant='danger'><ChatBubbleOutlineIcon/></Button></a></Col><Col></Col></Row>
            </div>
            </Row>
            </div>
            <div style={{marginTop:10}}>
            <Row><div>
            <Row><Col><h6>bbbbbbbbbbbbbbbbbbb<br/>bbbbbbbbbbbbbbbbbb</h6></Col></Row>
            <Row><Col></Col>
            <Col xs={2}><Button variant="light"><AccountCircleTwoToneIcon/></Button></Col><Col xs={6}><span style={{color:'grey'}}><b>Last updated 2 days ago by jay</b></span></Col><Col xs={2} style={{marginRight:10}}><a href='#'><Button variant='danger'><ChatBubbleOutlineIcon/></Button></a></Col><Col></Col></Row>
            </div>
            </Row>
            </div>
            
              

          </div>
        </div>
    )
}
