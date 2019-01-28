import React from 'react'
import Text from '../components/atoms/Text'
import TextField from '@material-ui/core/TextField'

const Login = () => (
  <React.Fragment>
    <Text variant="title">
      Login Page
    </Text>
    <TextField
      placeholder="username"
    />
    <TextField
      type="password"
      placeholder="password"
    />
  </React.Fragment>
)

export default Login