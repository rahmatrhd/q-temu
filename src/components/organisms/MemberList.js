import React from 'react'
import MemberTile from '../molecules/MemberTile'
import List from '@material-ui/core/List'

const MemberList = ({ members }) => (
  <List>
    {members.map(({ name, title, avatar}) => {
      return (
        <MemberTile
          key={name}
          avatar={avatar}
          title={title}
          name={name}
        />
      )
    })}
  </List>
)

export default MemberList