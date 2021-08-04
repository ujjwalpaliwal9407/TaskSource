import React from 'react'
import { Row, Col, Button, Image } from 'react-bootstrap';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import profile from './images/profile.jpg';
import PersonIcon from '@material-ui/icons/Person';
import "./my.css";
export default function Deals(props) {
    return (
        <div className='container-fluid arrange'>
            <Row className='deals'>
                <Col md={3} xs={12}>
                <div style={{marginTop:10,marginBottom:10}}><Image id='profile' src="https://cdn.pixabay.com/photo/2017/02/15/11/42/t-shirt-2068353__340.png" alt="" fluid /></div>
                </Col>
                <Col md={9} xs={12}>
                     <Row >{/*style={{marginBottom:'-20px'}} */}
                       
                        <Col md={8}>
                            <div style={{display:"flex",alignItems:'center'}}><a href="#"><ThumbUpAltIcon style={{color:'rgb(190,190,190)',marginRight:5}}/></a><div style={{marginTop:10,height:35,width:50,backgroundColor:`${props.data.type}`,borderRadius:5,alignItems:'center'}}><span style={{color:'white'}}><div style={{marginTop:7}}><b>+ 0</b></div></span></div><a href="#"><ThumbDownIcon style={{color:'rgb(190,190,190)',marginLeft:5}}/></a></div>
                            <div style={{display:'flex'}}><p><b>Titttlee</b></p></div>
                            <div style={{marginTop:-15,display:"flex"}}><p> <b>Gaming</b><span style={{ color: 'red' }}> <b>₹200.00 20%</b> </span> <b><del> ₹250.00</del> off</b> <span style={{ color: 'red' }}> <b>Home & Living</b></span></p>
                            </div>
                        </Col>
                       
                        <Col md={4}><div style={{float:'right',marginTop:5}}><span style={{color:'red'}}>Expires on 09/07/2021</span></div></Col>
                       
                    </Row>
                    <Row style={{marginTop:-20}}>
                    <Col class="over1">
                    nd a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometime(injected humour and the like).
                    </Col>
                    </Row>
                    <Row style={{marginTop:-20}}>
                        <Col md={4} xs={6}>
                            <div style={{float:'left',display:'flex',alignItems:'center'}}>
                            <div style={{marginTop:10,height:40,width:40,backgroundColor:'lightgrey',borderRadius:'50%'}}><PersonIcon style={{marginTop:7}}/></div>
                            <div style={{marginLeft:10,marginTop:10}}><b>Ujjwal</b></div>
                            </div>
                        </Col>
                        <Col md={8} xs={6}>
                            <div style={{float:'right'}}>
                            <Button variant='light' style={{marginRight:10,marginTop:10}}><FavoriteBorderIcon/></Button>
                            <Button variant='light' style={{marginRight:10,marginTop:10}}><ChatBubbleIcon/> 0</Button>
                            <Button style={{marginTop:10,border:'none',backgroundColor:`${props.data.type}`}}>See_Deal</Button>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div >
    )
}
