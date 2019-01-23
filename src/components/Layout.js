import React from 'react'
import NavBar from './NavBar'
import Text from '../components/atoms/Text'

class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="header">
          <NavBar title={this.props.header}/>
        </div>
        <div
          id="content"
          style={{
            paddingLeft: 30,
            paddingRight: 30,
          }}
        >
          {this.props.children}
        </div>
        <div id="footer">
          <Text align="center" variant="caption" gutterBottom>
            {this.props.footer}
          </Text>
        </div>
      </React.Fragment>
    )
  }
}

export default Layout