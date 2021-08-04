import React, { Component } from 'react'
import Header from '../Header/Header';
import Slider1 from '../Slider1/Slider1';
import Slider2 from '../Slider2/Slider2';
import Deals_Discussions from '../Deals_Discussions';
import {Link,Switch,Route,BrowserRouter as Router} from 'react-router-dom';
export default class Page1 extends Component {
    render() {
        return (
            <div>
                <Header data={{type:'rgb(208,26,38)',text:'Find Best Deals in UK'}} />
                <Slider1 data={{type:'rgb(208,26,38)'}}/>
                <Deals_Discussions data={{type:'rgb(208,26,38)',Hname:'Highlights',name:'Best Deals',name1:'Discussions',type1:'rgb(26,31,126)',hide:'true'}} />
                
            </div>
        )
    }
}
