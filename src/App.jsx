import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Login from './pages/Login'
import About from './pages/About'
import MemberDetail from './pages/MemberDetail'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import orange from '@material-ui/core/colors/orange'
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from './components/Layout';
import { Provider } from 'react-redux'
import myStore from './config/store'

const theme = createMuiTheme({
  palette: {
    primary: orange,
  },
})

class App extends Component {
  render() {
    return (
      <Provider store={myStore}>
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <Layout
              header="HIJUP"
              footer="copyright rahmathd"
            >
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/about" component={About} />
              <Route path="/member/:id" component={MemberDetail} />
            </Layout>
          </BrowserRouter>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
