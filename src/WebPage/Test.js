import React from 'react';
import {Spring} from 'react-spring';
export default function Test() {
    return (
        <Spring 
        from={{opacity:0, mrginTop: -300}}
        to={{opacity:1, marginTop:0}}
        >
         {props=>{
            <div style={props}>
                 <div style={{height:300,witdh:'100%',backgroundColor:'lightcoral',border:"1px solid black"}}>
            <h1>Component Test</h1>
            <p>lorem fdsf sg s asdas tih rfgo this id aERFO</p>
        </div>
            </div>
        }} 
        </Spring>
    )
}
