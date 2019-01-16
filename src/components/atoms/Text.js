import React from 'react'

// stateful component
// class Text extends React.Component {
//   render() {
//     return <p {...this.props} />
//   }
// }

// stateless component
const Text = (props) => {
  return <p {...props} />
}

export default Text