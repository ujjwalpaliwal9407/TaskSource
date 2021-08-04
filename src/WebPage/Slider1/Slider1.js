import React, { Component } from "react";
import Slider from "react-slick";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../Slider.css';
const PreviouseBtn=(props)=>{
const {className,onClick}=props;
return(
    <div className={className} onClick={onClick}>
     <KeyboardArrowRightIcon style={{color:'white',backgroundColor:`${props.data.type}`,height:30,width:30,display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'50%'}}/>
    </div> 
)
}
const NextBtn=(props)=>{
  const {className,onClick}=props;
  return(
    <div className={className} onClick={onClick}>
     <KeyboardArrowLeftIcon style={{color:'white',backgroundColor:`${props.data.type}`,height:30,width:30,display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'50%'}}/>
  </div>
  )
}
export default class Slider1 extends Component {
  render() {

    const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className='silder1_main' style={{margin:30,marginTop:15,marginBottom:-5}}>
        <Slider autoplay={true} nextArrow={<PreviouseBtn data={{type:this.props.data.type}}/>}
        prevArrow={<NextBtn data={{type:this.props.data.type}}/>}>
      
                <div id="slider1_layout"><div style={{marginTop:8}}><a href='#' id="Slider1_hover"><b>1. loream dgd rg dsg gr dfg sgff hg df g sddf s</b></a></div></div>
                <div id="slider1_layout"><div style={{marginTop:8}}><a href='#' id="Slider1_hover"><b>2. loream dgd rg dsg grrgd g dfg sgff hg df g sddf s</b></a></div></div>
                <div id="slider1_layout"><div style={{marginTop:8}}><a href='#' id="Slider1_hover"><b>3. loream dgd rg dsg grrgd g dfg sgff hg df g sddf s</b></a></div></div>
                <div id="slider1_layout"><div style={{marginTop:8}}><a href='#' id="Slider1_hover"><b>4. loream dgd rg dsg grrgd g dfg sgff hg df g sddf s</b></a></div></div>
        
        </Slider>
      </div>
    );
  }
}
