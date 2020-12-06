import LayoutComponent from '../components/layout.component'
import * as React from 'react'

interface Props {
  title?: string
}

export default class Home extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <LayoutComponent>
        <h1>Under Construction</h1>
      </LayoutComponent>
    )
  }
}
