import React, { Component } from 'react';
import Slider from "react-slick";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import '../Slider.css';
const PreviouseBtn1=(props)=>{
    const {className,onClick}=props;
    return(
        <div className={className} onClick={onClick}>
         <KeyboardArrowRightIcon style={{color:'white'}}/>
        </div> 
    )
    }
    const NextBtn1=(props)=>{
      const {className,onClick}=props;
      return(
        <div className={className} onClick={onClick}>
         <KeyboardArrowLeftIcon style={{color:'white'}}/>
      </div>
      )
    }
export default class Slider2 extends Component {
    render() {
        const settings = {
            infinite: true,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1124,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                  infinite: true,
                  dots:false
                }
              },
              {
                breakpoint: 700,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
        return (
            <div className="container-fluid sider2_main" style={{marginTop:5,marginBottom:10}}>
                 <Slider {...settings} autoplay={true} slidesToShow={5} nextArrow={<PreviouseBtn1/>} prevArrow={<NextBtn1/>}>
                 <div><div id='slider2'><a href="#" id="Slider2_hover"><HomeOutlinedIcon  style={{marginRight:10,backgroundColor:'rgb(208,12,39)',color:'white',borderRadius:'50%'}}/><b>Home & Living</b></a></div></div>
                  {/* <div><div id='slider2'><a href="#" id="Slider2_hover"><HomeOutlinedIcon fontSize='large' style={{marginTop:17,marginRight:10,backgroundColor:'rgb(208,12,39)',color:'white',borderRadius:'50%'}}/><b> Home & Living</b></a></div></div> */}
                  <div><div id='slider2'><a href="#" id="Slider2_hover"><PowerSettingsNewIcon style={{marginRight:10,backgroundColor:'rgb(208,12,39)',color:'white',borderRadius:'50%'}}/><b>Electronics</b></a></div></div>
                  <div><div id='slider2'><a href="#" id="Slider2_hover"><SportsEsportsIcon style={{marginRight:10,backgroundColor:'rgb(208,12,39)',color:'white',borderRadius:'50%'}}/><b>Gaming</b></a></div></div>
                  <div><div id='slider2'><a href="#" id="Slider2_hover"><ShoppingCartIcon style={{marginRight:10,backgroundColor:'rgb(208,12,39)',color:'white',borderRadius:'50%'}}/><b>Groceries</b></a></div></div>
                  <div><div id='slider2'><a href="#" id="Slider2_hover"><LocalFloristIcon style={{marginRight:10,backgroundColor:'rgb(208,12,39)',color:'white',borderRadius:'50%'}}/><b>Garden & Do it...</b></a></div></div>
                  <div><div id='slider2'><a href="#" id="Slider2_hover"><LocalMallOutlinedIcon  style={{marginRight:10,backgroundColor:'rgb(208,12,39)',color:'white',borderRadius:'50%'}}/><b>Fashion & kids</b></a></div></div>
                </Slider>
            </div>
        )
    }
}
