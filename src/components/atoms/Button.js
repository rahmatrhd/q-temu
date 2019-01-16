import React from 'react'

class Button extends React.Component {
  render() {
    return (
      <button
        {...this.props}
        style={{
          padding: '10px 30px',
          fontWeight: 'bold',
          textTransform: 'uppercase',
        }}
      />
    )
  }
}

export default Button