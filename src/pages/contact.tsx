import Layout from '../components/layout'
import * as React from 'react'

interface Props {}
interface State {}

export default class Contact extends React.Component<Props, State> {
  render(): JSX.Element {
    return (
      <Layout>
        <h1>Contact</h1>
      </Layout>
    )
  }
}
