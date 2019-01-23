import React from 'react'
import './MemberTile.css'
import Avatar from '../../atoms/Avatar'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'

const MemberTile = ({ avatar, title, name }) => (
  <ListItem button>
    <ListItemAvatar>
      <Avatar>{name[0]}</Avatar>
    </ListItemAvatar>
    <ListItemText
      primary={name}
      secondary={title}
    />
  </ListItem>
)

export default MemberTile