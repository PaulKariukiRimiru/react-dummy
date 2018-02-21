import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import {Col, Row} from 'react-flexbox-grid'

export default class Button extends Component{
    render(){
        var divStyle = {
            margin: 12
        }
        return(

            <Row>
            <Col xs={12}>
                <Row center="xs">
                <Col xs={6} >
                    <RaisedButton  primary={true} style={divStyle} label="Hey Click me"/>
                </Col>
                </Row>
            </Col>
            </Row>
        );
    };
}