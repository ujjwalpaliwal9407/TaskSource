import React,{useState} from 'react';
import styled from 'styled-components';
import "./Modal.css";

export default function Modal({modal,setModal,toggle}) {
    return (
        <div>
            {modal?
            <div className='modalcss'>
                <div><button onClick={toggle}>x</button>
                <h1>hifghfhfhfghfgh</h1>
            </div>:null}
        </div>
    )
}

