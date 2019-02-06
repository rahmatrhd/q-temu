import React from 'react'
import Section from '../components/organisms/Section'
import MainMeetup from '../components/molecules/MainMeetup'
import MemberList from '../components/organisms/MemberList'
import { connect } from 'react-redux'
import { fetchMembers } from '../common/actions/members'

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchMembers()
  }

  render() {
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
          {this.props.members.data.length === 0 ?
            "Loading..."
            :
            <MemberList members={this.props.members.data} />
          }
        </Section>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    members: state.members,
  }
}

const mapDispatchToProps = {
  fetchMembers: fetchMembers,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)