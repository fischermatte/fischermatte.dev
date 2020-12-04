import Layout from '../components/layout'
import * as React from 'react'

interface Props {}
interface State {}

export default class Projects extends React.Component<Props, State> {
  render(): JSX.Element {
    return (
      <Layout>
        <h1>Projects</h1>
      </Layout>
    )
  }
}
