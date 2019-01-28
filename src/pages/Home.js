import React from 'react'
import Section from '../components/organisms/Section'
import MainMeetup from '../components/molecules/MainMeetup'
import MemberList from '../components/organisms/MemberList'
import axios from 'axios'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      error: false,
      members: []
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
        this.setState({
          error: true
        })
      })
  }

  componentWillUpdate() {
    console.log('haloo component WILL update')
  }

  componentDidUpdate() {
    console.log('haloo component did update')
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('this.state', this.state)
  //   console.log('nextState', nextState)

  //   if (nextState.members.length >= 10)
  //     return true
  //   else
  //     return false
  // }

  render() {
    console.log('render gais')
    return (
      <React.Fragment>
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
          {this.state.members.length === 0 ? 
            (this.state.error ? 'error nih' : 'loading...')
            :
            <MemberList members={this.state.members} />
          }
        </Section>
      </React.Fragment>
    )
  }
}

export default Home