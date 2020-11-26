import '../styles/tailwind.css'
import {AppProps} from 'next/app'
import * as React from 'react'

class MyApp extends React.Component<AppProps> {
  render(): JSX.Element {
    let {Component, pageProps} = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp
