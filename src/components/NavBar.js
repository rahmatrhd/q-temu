import React from 'react'

class NavbarMenu extends React.Component {
  render() {
    return (
      <li
        style={{
          display: 'inline',
          padding: 20,
        }}
        {...this.props}
      />
    )
  }
}

class NavBar extends React.Component {
  render() {
    return (
      <ul
        style={{
          listStyleType: 'none',
          margin: 0,
          padding: 0,
          backgroundColor: 'rgba(0,0,0,0.2)',
          padding: 20,
        }}
      >
        <NavbarMenu>{this.props.title}</NavbarMenu>
        <NavbarMenu>Home</NavbarMenu>
        <NavbarMenu>Create Meetup</NavbarMenu>
        <NavbarMenu>Explore</NavbarMenu>
      </ul>
    )
  }
}

export default NavBar