import React, { Component } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Item from "../components/Item";

 export default class Main extends Component{
     render(){
        var divStyle = {
            margin: '0',
            position: 'absolute',
            top: '20%',
            left: '50%',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
         return(
            <div style={divStyle}>
                <Header />
                <ul>
                    <Item />
                    <Item />
                    <Item />
                </ul>
                <Footer />
            </div>
         );
     };
 }