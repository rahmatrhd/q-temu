import React from 'react'
import NavBar from './NavBar'

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="header">
          <NavBar title={this.props.header}/>
        </div>
        <div id="content">
          {this.props.children}
        </div>
        <div id="footer">
          {this.props.footer}
        </div>
      </React.Fragment>
    )
  }
}

export default Layout