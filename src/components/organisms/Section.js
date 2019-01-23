import React from 'react'
import Text from '../atoms/Text'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

class Section extends React.Component {
  render() {
    return (
      <Card style={{
        textAlign: 'left',
        marginBottom: 30,
      }}>
        <CardContent>
        <Text variant="title" gutterBottom>{this.props.title}</Text>
          {this.props.children}
        </CardContent>
      </Card>
    )
  }
}

export default Section