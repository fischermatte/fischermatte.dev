import {AppProps} from 'next/app'
import React from 'react'
import '../../styles/main.css'

export default class MyApp extends React.Component<AppProps> {
  render(): JSX.Element {
    const {Component, pageProps} = this.props
    return <Component {...pageProps} />
  }
}
