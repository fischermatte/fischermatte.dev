import * as React from 'react'
import Head from 'next/head'

type LayoutProps = {
  children: any
}

export default class Layout extends React.Component<LayoutProps> {
  render(): JSX.Element {
    let {children} = this.props
    return (
      <div>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <title>Georg Ludewig, Software Engineer in Bernlocal</title>
        </Head>
        <header className="w-full p-6 bg-gray-300">Header</header>
        <main className="w-full  p-6 bg-gray-100">{children}</main>
        <footer className="w-full p-6 bg-gray-300"> Footer</footer>
      </div>
    )
  }
}
