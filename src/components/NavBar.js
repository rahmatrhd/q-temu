import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '../components/atoms/Button'
import Text from '../components/atoms/Text'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class NavbarMenu extends React.Component {
  render() {
    return (
      <Button
        color="inherit"
        {...this.props}
      />
    )
  }
}

class NavBar extends React.Component {
  componentWillUnmount() {
    console.log('apakah Navbar ke unmount?')
  }
  render() {
    const { aplikasi } = this.props
    return (
      <AppBar position="static">
        <Toolbar>
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              <Text variant="title" color="inherit">{aplikasi.pageTitle}</Text>
            </Grid>
            <Grid item>
              <Link to="/">
                <NavbarMenu>Home</NavbarMenu>
              </Link>
              <Link to="/about">
                <NavbarMenu>About</NavbarMenu>
              </Link>
              <Link to="/login">
                <NavbarMenu>Login</NavbarMenu>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('ini state', state)
  return {
    aplikasi: state.app,
  }
}

export default connect(mapStateToProps)(NavBar)