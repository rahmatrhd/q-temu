import React from 'react'
import Text from '../atoms/Text'
import Avatar from '../atoms/Avatar'
import Button from '../atoms/Button'
import Grid from '@material-ui/core/Grid'
import withWidth from '@material-ui/core/withWidth'

const MainMeetup = ({ width }) => {
  const isMobileScreen = width === 'xs' || width === 'sm'

  return (
    <Grid container spacing={16} direction={isMobileScreen ? 'column' : 'row'} alignItems="center">
      <Grid item>
        <Avatar
          style={{ width: 150, height: 150 }}
          src="https://placehold.it/200x200"
        />
      </Grid>
      <Grid item xs>
        <Text variant="title" gutterBottom>Hacktiv8 Meetup</Text>
        <Text gutterBottom>
          Location: Jakarta, Indonesia
        </Text>
        <Text gutterBottom>
          Members: 1,024
        </Text>
        <Text gutterBottom>
          Organizers: Adhy Wiranata
        </Text>
        <Button color="primary" variant="raised" size="large">Join Us</Button>
      </Grid>
    </Grid>
  )
}

// cosnt withWidth = () => {
//   return (Component) => {}
// }
// const applyWidth = withWidth()
// export default applyWidth(MainMeetup)

export default withWidth()(MainMeetup)