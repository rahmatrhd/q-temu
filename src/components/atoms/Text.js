import React from 'react'
import styled from 'styled-components'

// stateful component
// class Text extends React.Component {
//   render() {
//     return <p {...this.props} />
//   }
// }

const StyledText = styled.p`
  font-weight: ${({ variant }) => (variant === 'title') && 'bold' };
  background-color: papayawhip;
`

// stateless component
const Text = ({ variant, ...restProps }) => {

  return (
    <StyledText
      {...restProps}
    />
  )
}

export default Text