import Layout from '../components/layout'
import * as React from 'react'

interface Props {
  title?: string
}

export default class Home extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <Layout>
        <h1>I love coding</h1>
      </Layout>
    )
  }
}
