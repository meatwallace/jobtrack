import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Names from './Names/Names';
import ApiService from './services/ApiService';
import './App.css';

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
          <Names />
      </MuiThemeProvider>
    );
  }
}

export default App;
