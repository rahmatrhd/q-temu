import React from 'react'
import MemberTile from '../molecules/MemberTile'

const MemberList = ({ members }) => (
  <ul style={{ padding: 0, }}>
    {members.map(({ name, title, avatar}) => {
      return (
        <MemberTile
          avatar={avatar}
          title={title}
          name={name}
        />
      )
    })}
  </ul>
)

export default MemberList