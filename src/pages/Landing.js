import React, { Component } from 'react';
import Card from "material-ui/Card";
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Login from '../components/Login';
import Register from '../components/Register';
import FontIcon from 'material-ui/FontIcon';
import {Col , Row } from 'react-flexbox-grid'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


 export default class Landing extends Component{

    constructor(){
        super();
        this.state = {
            itemIndex:0
        };
      }
    
      handleChange(value) {
        this.setState({
            itemIndex : value
        });
      }

     render(){
        var divStyle = {
            width:'30%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginRight: '-50%',
            marginTop:"20px",
            transform: 'translate(-50%, -50%)',
            flexBasis: '50%'
        }

        return(
            <MuiThemeProvider>
            <Row container>
                <Col xs={12} >
                <Row center="xs" >
                    <Col xs={6} style={divStyle}>
                    <Card >
                        <Row>
                            <Col xs>
                            <Tabs 
                            onChange={this.handleChange.bind(this)}
                                value={this.state.itemIndex}>
                                <Tab
                                    icon={<FontIcon className="material-icons">person</FontIcon>}
                                    label="Login"
                                    value={0}
                                    />
                                <Tab
                                    icon={<FontIcon className="material-icons">person_add</FontIcon>}
                                    label="Register"
                                    value={1}
                                    />
                            </Tabs>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs>
                            <SwipeableViews 
                                onChange={this.handleChange.bind(this)}
                                index={this.state.itemIndex}>
                                <Row>
                                    <Col xs>
                                        <Login />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs>
                                        <Register />
                                    </Col>
                                </Row>
                            </SwipeableViews>
                            </Col>
                        </Row>
                    </Card>
                    </Col>
                </Row>
                </Col>
            </Row>
        </MuiThemeProvider>
        );
     };
 }