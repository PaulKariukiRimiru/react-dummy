import React, { Component } from 'react';
import { connect } from 'react-redux'
import Grid from '../components/Grid'

const mapStateToProps = (state) => ({
    modules : state.modules
})
export class DashBoard extends Component{
    render(){
        return(
            <Grid modules={this.props.modules}/>
        );
    }
}

export default connect(mapStateToProps)(DashBoard)
