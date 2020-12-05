import LayoutComponent from '../components/layout.component'
import * as React from 'react'

interface Props {}
interface State {}

export default class Contact extends React.Component<Props, State> {
  render(): JSX.Element {
    return (
      <LayoutComponent>
        <h1>Contact</h1>
      </LayoutComponent>
    )
  }
}
