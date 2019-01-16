import React from 'react'
import Text from '../atoms/Text'

class Section extends React.Component {
  render() {
    return (
      <div style={{
        textAlign: 'left',
        backgroundColor: 'yellow'
      }}>
        <Text variant="title">{this.props.title}</Text>
        <div style={{
          paddingLeft: 30,
          paddingRight: 30
        }}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Section