import React from 'react'
import Text from '../components/atoms/Text'
import TextField from '@material-ui/core/TextField'

const Login = (props) => {
  const queries = new URLSearchParams(props.location.search)

  return (
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
      <button onClick={() => props.history.push('/profile')}>Login</button>
    </React.Fragment>
  )
}

export default Login