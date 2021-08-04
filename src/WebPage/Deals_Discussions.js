import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Row, Col, Button } from 'react-bootstrap';
import Slider2 from './Slider2/Slider2';
import Deals from './Deals';
import Highlights from './Highlights';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './my.css';
import avtar from './images/bandmember.jpg';
export default class Deals_Discussions extends Component {
  constructor(props) {
    super(props)
    this.state={
      flag:false
    }
  }
  change=()=>{
    if(this.state.flag==true){
    this.setState({
      flag:false
    })
    }
    else{
      this.setState({
        flag:true
      })
    }
  }
  render() {
    return (
        <div className="container-fluid" style={{margin:5}}>
<div id="feedback">
			<a href="#popup1" style={{backgroundColor:`${this.props.data.type1}`}}><button style={{border:'none'}} onClick={()=>this.change()}>{(this.state.flag==true)?<Link to="/">{this.props.data.name1}</Link>:<Link to="/home/discussion">{this.props.data.name1}</Link>}</button></a>
		</div>


          {/* <Link to="/home/discussion"><Button variant='light'><RedoSharpIcon/></Button></Link>
          <Link to="/"><Button variant='light'><UndoSharpIcon/></Button></Link> */}
          {/* </Row> */}
        <Row>
          <Col md={12} lg={9}><h4 style={{color:'black'}}><b>{this.props.data.name}</b></h4>
            <Row style={{marginRight:20,marginBottom:-15}} >
            <div className="container-fluid" ><Highlights data={{type:this.props.data.type,type1:this.props.data.type1,Hname:this.props.data.Hname}}/></div>  
            </Row>
            {(this.props.data.hide=='true')?<Row style={{marginBottom:-10, width:'100%'}}>
              <div style={{marginLeft:10 , width:'98%'}}>
              <Slider2/>
              </div>
            </Row>:null}
            <Row style={{height:'auto', width:'100%',marginBottom:-10}} >
              <Deals data={{type:this.props.data.type}}/>
            </Row>
            <Row style={{height:'auto', width:'100%',marginBottom:-10}} >
              <Deals data={{type:this.props.data.type}}/>
            </Row>
          </Col>
           
          <Col md={12} lg={3} style={{marginLeft:-23}}>
          <div className='side_deals_main'> 
            <h4 style={{color:'black'}}><b>{this.props.data.name1}</b></h4>
          {/* <br></br> */}
          <div className="side_deals">
            <div className="setup">
            <Row><div>
            <Row md={12}><Col><h6>bbbbbbbbbbbbbbbbbbbbbbbbb</h6></Col></Row>
            <Row><Col xs={3}  ><img src={avtar} alt="SSS" style={{height:40,width:40,marginRight:-35,borderRadius:'50%'}}/></Col><Col xs={6} ><span style={{color:'grey'}}><b>Last updated 2 days ago by jay</b></span></Col><Col xs={3} ><a href='#' style={{marginRight:20,marginLeft:-18}}><ChatBubbleIcon style={{fontSize:40,color:`${this.props.data.type}`}}/></a></Col><Col></Col></Row>
            </div>
            </Row>
            </div>
            <div className="setup">
            <Row><div>
            <Row md={12}><Col><h6>bbbbbbbbbbbbbbbbbbbbbbbbb</h6></Col></Row>
            <Row><Col xs={3}  ><img src={avtar} alt="SSS" style={{height:40,width:40,marginRight:-35,borderRadius:'50%'}}/></Col><Col xs={6} ><span style={{color:'grey'}}><b>Last updated 2 days ago by jay</b></span></Col><Col xs={3} ><a href='#' style={{marginRight:20,marginLeft:-18}}><ChatBubbleIcon style={{fontSize:40,color:`${this.props.data.type}`}}/></a></Col><Col></Col></Row>
            </div>
            </Row>
            </div>
            <div className="setup">
            <Row><div>
            <Row md={12}><Col><h6>bbbbbbbbbbbbbbbbbbbbbbbbb</h6></Col></Row>
            <Row><Col xs={3}  ><img src={avtar} alt="SSS" style={{height:40,width:40,marginRight:-35,borderRadius:'50%'}}/></Col><Col xs={6} ><span style={{color:'grey'}}><b>Last updated 2 days ago by jay</b></span></Col><Col xs={3} ><a href='#' style={{marginRight:20,marginLeft:-18}}><ChatBubbleIcon style={{fontSize:40,color:`${this.props.data.type}`}}/></a></Col><Col></Col></Row>
            </div>
            </Row>
            </div>
          </div>
        </div>
          </Col>
        </Row>
        </div>
    )
  }
}
