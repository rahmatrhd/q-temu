import React from 'react'
import { Redirect } from 'react-router-dom'
import Text from '../components/atoms/Text'

const About = ({ location }) => {
  const queries = new URLSearchParams(location.search)

  if (queries.get('secret') === 'sst')
    return <Text>This is About Page</Text>
  
  return <Redirect to="/" />
}

export default About