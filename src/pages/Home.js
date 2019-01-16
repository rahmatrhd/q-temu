import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/organisms/Section'
import MainMeetup from '../components/molecules/MainMeetup'
import MemberList from '../components/organisms/MemberList'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      members: [
        {
          avatar: 'https://placehold.it/50x50',
          name: 'Adhy Wiranata',
          title: 'Organizers',
        },
        {
          avatar: 'https://placehold.it/50x50',
          name: 'Peter Parker',
          title: 'Spider Man',
        },
        {
          avatar: 'https://placehold.it/50x50',
          name: 'Tony Stark',
          title: 'Iron Man',
        },
        {
          avatar: 'https://placehold.it/50x50',
          name: 'Thor',
          title: 'God of Thunder',
        }
      ]
    }
  }
  render() {
    return (
      <Layout
        header="HIJUP"
        footer="by rahmathd"
      >
        <Section>
          <MainMeetup />
        </Section>
        <Section title="Next Meetup">
          Next Meetup Content
        </Section>
        <Section title="About Meetup">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo consequuntur est, porro dicta excepturi molestias reprehenderit consequatur debitis labore voluptas molestiae cumque, commodi totam sed sapiente nulla vero consectetur eaque?
        </Section>
        <Section title="Members">
          <MemberList members={this.state.members} />
        </Section>
      </Layout>
    )
  }
}

export default Home