import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/organisms/Section'

class Home extends React.Component {
  render() {
    return (
      <Layout
        header="HIJUP"
        footer="by rahmathd"
      >
        <h1>Welcome</h1>
        <Section title="Next Meetup">
          Next Meetup Content
        </Section>
        <Section title="About Meetup">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo consequuntur est, porro dicta excepturi molestias reprehenderit consequatur debitis labore voluptas molestiae cumque, commodi totam sed sapiente nulla vero consectetur eaque?
        </Section>
        <Section title="Members">
          Members content
        </Section>
      </Layout>
    )
  }
}

export default Home