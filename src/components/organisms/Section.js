import React from 'react'
import Text from '../atoms/Text'

class Section extends React.Component {
  render() {
    return (
      <div style={{
        textAlign: 'left',
        marginBottom: 30,
      }}>
        <Text variant="title">{this.props.title}</Text>
        <div style={{
          padding: 30,
          backgroundColor: 'rgba(0,0,0,0.1)',
        }}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Section