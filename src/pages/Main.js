import React, { Component } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Item from "../components/Item";
import InputField from "../components/InputField"
import Button from "../components/Button";
import Card from "material-ui/Card";


 export default class Main extends Component{
     render(){
        var divStyle = {
            padding: '20px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
        var textStyle = {
            textAlign:'center'
        }
        return(
        <Card style={divStyle}>
            <h3 style={textStyle}>Welcome Earthling</h3>
            <InputField />
            <InputField />
            <Button />
        </Card>
        );
     };
 }