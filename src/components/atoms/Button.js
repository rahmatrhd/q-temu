import React from 'react'
import { css } from 'emotion'

const styles = {
  button: {
    padding: '10px 30px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    ':hover': {
      backgroundColor: 'rgba(0,0,0,0.2)',
    },
  },
}

class Button extends React.Component {
  render() {
    return (
      <button
        {...this.props}
        className={css(styles.button)}
      />
    )
  }
}

export default Button