import React, { Component } from 'react';
import Header from '../Header/Header';
import Slider1 from '../Slider1/Slider1';
import Deals_Discussions from '../Deals_Discussions';
import {Link,Switch,Route,BrowserRouter as Router} from 'react-router-dom';
export default class Page2 extends Component {
    render(props) {
        return (
            <div>
                <Header data={{type:'rgb(26,31,126)',text:'Find Best Discussions in UK'}}/>
                <Slider1 data={{type:'rgb(26,31,126)'}}/>
                <Deals_Discussions data={{type:'rgb(26,31,126)',Hname:'New',name:'Discussions',name1:'Best Deals',type1:'rgb(208,26,38)'}}/>
                
            </div>
        )
    }
}
