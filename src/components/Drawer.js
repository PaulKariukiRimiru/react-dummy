import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom'

export default class MainDrawer extends Component{
    render(){
        return(
            <Drawer open={this.props.open}>
                <Link to="/"><MenuItem onClick={this.props.handleToogle}>Home</MenuItem></Link>
                <Link to="/dashboard"><MenuItem onClick={this.props.handleToogle}>DashBoard</MenuItem></Link>
                <Link to="/todo"><MenuItem onClick={this.props.handleToogle}>ToDo</MenuItem></Link>
            </Drawer>
        );
    }
}