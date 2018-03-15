import React, { Component } from 'react';
import GridList from 'material-ui/GridList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Grid extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <GridList>   
                </GridList>
            </MuiThemeProvider>
        )
    }
}
