import React, { Component } from 'react';
import Main from "./pages/Main";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  
  render() {

    return (
      <MuiThemeProvider>
          <Header />
          <Main />
          <Footer />
      </MuiThemeProvider>
      
    );
  }
}

export default App;
