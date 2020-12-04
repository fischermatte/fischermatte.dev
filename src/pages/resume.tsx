import Layout from '../components/layout'
import * as React from 'react'

interface Props {}
interface State {}

export default class Resume extends React.Component<Props, State> {
  render(): JSX.Element {
    return (
      <Layout>
        <h1>Resume</h1>
      </Layout>
    )
  }
}
