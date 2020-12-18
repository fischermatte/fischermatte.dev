import '../../styles/main.css'
import {AppProps} from 'next/app'
import React from 'react'

export default class MyApp extends React.Component<AppProps> {
  render(): JSX.Element {
    const {Component, pageProps} = this.props
    return <Component {...pageProps} />
  }
}
