import React from 'react'

const Avatar = ({ src, ...restProps }) => (
  <img
    {...restProps}
    src={src}
    style={{
      borderRadius: 1000,
    }}
  />
)

export default Avatar