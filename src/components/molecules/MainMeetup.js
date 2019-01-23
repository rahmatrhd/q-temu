import React from 'react'
import Text from '../atoms/Text'
import Avatar from '../atoms/Avatar'
import Button from '../atoms/Button'

const MainMeetup = () => (
  <div style={{ display: 'flex'}}>
    <div style={{ marginRight: 30, }}>
      <Avatar
        style={{ width: 150, height: 150 }}
        src="https://placehold.it/200x200"
      />
    </div>
    <div style={{ flex: 1 }}>
      <Text variant="title">Hacktiv8 Meetup</Text>
      <Text>
        Location: Jakarta, Indonesia
      </Text>
      <Text>
        Members: 1,024
      </Text>
      <Text>
        Organizers: Adhy Wiranata
      </Text>
      <Button color="primary" variant="raised" size="large">Join Us</Button>
    </div>
  </div>
)

export default MainMeetup