import * as React from 'react'

type LayoutProps = {
  children: any
}

export default class Layout extends React.Component<LayoutProps> {
  render(): JSX.Element {
    let {children} = this.props
    return (
      <body>
        <div>{children}</div>
      </body>
    )
  }
}
