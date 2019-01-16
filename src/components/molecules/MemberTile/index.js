import React from 'react'
import './MemberTile.css'
import Text from '../../atoms/Text'
import Avatar from '../../atoms/Avatar'

const MemberTile = ({ avatar, title, name }) => (
  <li className="member-tile">
    <div className="member-tile-avatar">
      <Avatar src={avatar}/>
    </div>
    <div className="member-tile-content">
      <Text variant="title">{title}</Text>
      <Text>{name}</Text>
    </div>
  </li>
)

export default MemberTile