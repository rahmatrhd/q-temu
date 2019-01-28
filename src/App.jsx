import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Login from './pages/Login'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import orange from '@material-ui/core/colors/orange'
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from './components/Layout';

const theme = createMuiTheme({
  palette: {
    primary: orange,
  },
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Layout
            header="HIJUP"
            footer="by rahmathd"
          >
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
          </Layout>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
