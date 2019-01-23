import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import orange from '@material-ui/core/colors/orange'

const theme = createMuiTheme({
  palette: {
    primary: orange,
  },
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Home />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
