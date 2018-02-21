import React, { Component } from 'react';

export default class Footer extends Component{
    render(){
        var divStyle = {
            position:'absolute',
            bottom:'0',
            width:'100%'
        }
        return(
            <div style={divStyle}>
                <h2>Footer</h2>
            </div>
        );
    };
}