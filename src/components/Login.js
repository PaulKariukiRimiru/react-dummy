import React, { Component } from 'react';
import {Col, Row} from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField';

export default class Login extends Component{
    render(){
        var textStyle = {
            textAlign:'center'
        }
        var rowStyle={
            marginLeft:0,
            marginRight:0
        } 
        var divStyle = {
            margin: 12,
        }

        return(
            <Row center="xs" style={rowStyle}>
                <Col xs={12}>
                    <Row center="xs">
                    <Col xs ><h3 style={textStyle}>Welcome</h3></Col>
                    </Row>
                    <Row center="xs">
                    <Col xs >
                        <TextField style={divStyle}
                            floatingLabelText="Email"
                            refs="emailField"/>
                    </Col>
                    </Row>
                    <Row center="xs">
                    <Col xs >
                        <TextField style={divStyle}
                            floatingLabelText="Password"
                            refs="passwordField"/>
                    </Col>
                    </Row>
                    <Row center="xs">
                    <Col xs={6} >
                        <RaisedButton  onClick={this.clickHandler} primary={true} style={divStyle} label="Login"/>
                    </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}