import LayoutComponent from '../components/layout.component'
import * as React from 'react'

interface Props {}
interface State {}

export default class Resume extends React.Component<Props, State> {
  render(): JSX.Element {
    return (
      <LayoutComponent>
        <h1>Resume</h1>
      </LayoutComponent>
    )
  }
}
