import React from 'react'

// stateful component
// class Text extends React.Component {
//   render() {
//     return <p {...this.props} />
//   }
// }

// stateless component
const Text = (props) => {
  const { variant } = props

  return (
    <p
      {...props}
      style={{
        fontWeight: (variant === 'title') && 'bold'
      }}
    />
  )
}

export default Text