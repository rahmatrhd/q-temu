import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '../components/atoms/Button'
import Text from '../components/atoms/Text'

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
          <Text variant="title" color="inherit">{this.props.title}</Text>
          <NavbarMenu>Home</NavbarMenu>
          <NavbarMenu>Create Meetup</NavbarMenu>
          <NavbarMenu>Explore</NavbarMenu>
        </Toolbar>
      </AppBar>
    )
  }
}

export default NavBar