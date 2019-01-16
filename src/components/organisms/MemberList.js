import React from 'react'
import MemberTile from '../molecules/MemberTile'

const MemberList = ({ members }) => (
  <ul>
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