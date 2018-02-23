import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/Header';
import Footer from './components/Footer';
import MainDrawer from './components/Drawer';

class App extends Component {

  constructor(){
    super();
    this.state = {
      open:false
    }
  }

  handleToogleDrawer(){
    this.setState({
      open:!this.setState.open
    });
  }

  handleClose(){
    this.setState({open: false});
  }

  render() {

    return (
      <MuiThemeProvider>
          <Header header="Drinks" handleToogle={this.handleToogleDrawer.bind(this)}/>
          <MainDrawer open={this.state.open} handleToogle={this.handleClose.bind(this)}/>
          {this.props.children}
          <Footer />
      </MuiThemeProvider>
      
    );
  }
}

export default App;
