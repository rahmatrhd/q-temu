import React from 'react'
import { Card, CardContent, CircularProgress } from '@material-ui/core';
import Text from '../components/atoms/Text'
import axios from 'axios';

class Detail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      member: null,
    }
  }

  componentDidMount() {
    axios.get(`https://swapi.co/api/people/${this.props.match.params.id}`)
      .then(({ data }) => data)
      .then(member => this.setState({ member }))
  }

  render() {
    const { member } = this.state

    if (!member)
      return <CircularProgress />

    return (
      <Card>
        <CardContent>
          <Text variant="title">{member.name}</Text>
          <Text>{member.hair_color}</Text>
          <Text variant="caption">{member.height}</Text>
          <Text variant="caption">{member.mass}</Text>
        </CardContent>
      </Card>
    )
  }
}

export default Detail