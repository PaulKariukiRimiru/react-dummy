import React, { Component } from 'react';
import InputField from "../components/InputField"
import Button from "../components/Button";
import {Col, Row} from 'react-flexbox-grid';

export default class Login extends Component{
    render(){
        var textStyle = {
            textAlign:'center'
        }
        var rowStyle={
            marginLeft:0,
            marginRight:0
        } 

        return(
            <Row center="xs" style={rowStyle}>
                <Col xs={12}>
                    <Row center="xs">
                    <Col xs ><h3 style={textStyle}>Welcome</h3></Col>
                    </Row>
                    <Row center="xs">
                    <Col xs><InputField description="email"/></Col>
                    </Row>
                    <Row center="xs">
                    <Col xs ><InputField description="password"/></Col>
                    </Row>
                    <Row center="xs">
                    <Col xs ><Button label="login"/></Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}