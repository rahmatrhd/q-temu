import React from 'react'
import MemberTile from '../molecules/MemberTile'
import List from '@material-ui/core/List'
import { Link } from 'react-router-dom'

const MemberList = ({ members }) => (
  <List>
    {members.map(({ name, title, avatar}, index) => {
      return (
        <MemberTile
          key={name}
          avatar={avatar}
          title={title}
          name={<Link to={`/member/${index + 1}`}>{name}</Link>}
        />
      )
    })}
  </List>
)

export default MemberList