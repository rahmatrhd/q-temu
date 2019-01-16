import React from 'react'

// stateful component
// class Text extends React.Component {
//   render() {
//     return <p {...this.props} />
//   }
// }

// stateless component
const Text = ({ variant, ...restProps }) => {

  return (
    <p
      {...restProps}
      style={{
        fontWeight: (variant === 'title') && 'bold'
      }}
    />
  )
}

export default Text