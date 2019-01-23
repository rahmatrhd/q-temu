import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '../components/atoms/Button'
import Text from '../components/atoms/Text'
import Grid from '@material-ui/core/Grid'

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
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              <Text variant="title" color="inherit">{this.props.title}</Text>
            </Grid>
            <Grid item>
              <NavbarMenu>Home</NavbarMenu>
              <NavbarMenu>Create Meetup</NavbarMenu>
              <NavbarMenu>Explore</NavbarMenu>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    )
  }
}

export default NavBar