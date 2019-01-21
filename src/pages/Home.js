import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/organisms/Section'
import MainMeetup from '../components/molecules/MainMeetup'
import MemberList from '../components/organisms/MemberList'
import axios from 'axios'

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

  componentDidMount() {
    console.log('halo componentDidMount')
    axios.get('https://swapi.co/api/people/')
      .then(response => {
        console.log('response', response)

        const members = response.data.results.map((item) => {
          return {
            avatar: item.skin_color,
            name: item.name,
            title: item.hair_color,
          }
        })

        this.setState({
          members: members
        })
      })
      .catch(error => {
        console.log('axios error nih', error)
      })
  }

  componentWillUpdate() {
    console.log('haloo component WILL update')
  }

  componentDidUpdate() {
    console.log('haloo component did update')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('this.state', this.state)
    console.log('nextState', nextState)

    if (nextState.members.length >= 20)
      return true
    else
      return false
  }

  render() {
    console.log('render gais')
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