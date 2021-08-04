import React from 'react';
import './App.css';
import {Link,Switch,Route,BrowserRouter as Router} from 'react-router-dom';
import Page1 from './WebPage/Page1/Page1';
import Page2 from './WebPage/Page2/Page2';
import Footer from './WebPage/Footer';
import Deals_Discussions from './WebPage/Deals_Discussions';
import Test from './WebPage/Test';
export default function App(props) {
  return (
      <div className="App">
      {/* <Header/> */}
      {/* <Slider/> */}
      {/* <Slider2/> */}
      {/* <Footer/> */}
      {/* <Test/> */}
    <Router>
      <Route exact path='/' component={Page1}></Route>
      <Route exact path='/home/discussion' component={Page2}></Route>
    </Router>
    <Footer/>
      </div>
  );
}



