import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

export default class Header extends Component{
    render(){
        return(
            <AppBar
            title={this.props.header}
            iconClassNameRight="muidocs-icon-navigation-expand-more" 
            onLeftIconButtonClick={this.props.handleToogle}/>
        );
    };
}