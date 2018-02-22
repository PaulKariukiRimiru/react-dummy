import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export default class InputField extends Component{
    render(){
        var divStyle = {
            margin: 12,
        }
        return(
            <div>
                <TextField style={divStyle}
                    floatingLabelText={this.props.description}
                />
            </div>
        );
    };
}