import Layout from '../components/layout'
import * as React from 'react'

type HomeProps = {
  title?: string
}

export default class Home extends React.Component<HomeProps> {
  render(): JSX.Element {
    return (
      <Layout>
        <h1>Welcome</h1>
      </Layout>
    )
  }
}
