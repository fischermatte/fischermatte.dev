import '../styles/tailwind.css'
import {AppProps} from 'next/app'
import * as React from 'react'

export default class MyApp extends React.Component<AppProps> {
  render(): JSX.Element {
    let {Component, pageProps} = this.props
    return <Component {...pageProps} />
  }
}
