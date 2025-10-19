import {AppProps} from 'next/app'
import React, {ReactNode} from 'react'
import '../../styles/globals.css'

export default class MyApp extends React.Component<AppProps> {
  render(): ReactNode {
    const {Component, pageProps} = this.props
    return <Component {...pageProps} />
  }
}
